<script setup>
import { reactive, computed } from 'vue'
const user = reactive({
  email: '',
  password: '',
  confirm: ''
})
const emit = defineEmits(['gotoSignIn', 'signedIn', 'signUpStarted', 'signUpEnded', 'errorEncountered'])

import { useAuthStore} from "stores/auth";
const auth = useAuthStore();

import { useRouter } from "vue-router";
const router = useRouter()

import { AuthErrorCodes } from "firebase/auth";

import { authProviders } from "/src/components/auth/auth-providers.js"
import SignInProviders from "components/auth/SignInProviders.vue";


// Validations
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength } from '@vuelidate/validators'

const rules = computed (() => { return {
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirm: { sameAsPassword: sameAs(user.password) }
}})

const $v = useVuelidate(rules, user, { $autoDirty: true })
const signUpWithPassword = () => {
  console.log('Signing up with password')
  emitStarted('password')
  auth.register(user.email, user.password).then(user => {
    console.log(user)
    emitSignedIn('password')
  }).catch(error => {
    console.log('Mapped error', error)
    emitError(error)
    if (error.code === AuthErrorCodes.USER_DELETED) {
      console.log('User not found')
    }
  }).finally(() => {
    emitEnded('password')
  });
}

const emitSignedIn = (event) => {
  console.log(event)
  emit('signedIn', event)
}
const emitStarted = (event) => {
  console.log(event)
  emit('signUpStarted', event)
}
const emitEnded = (event) => {
  console.log(event)
  emit('signUpEnded', event)
}
const emitError = (event) => {
  console.log(event)
  emit('errorEncountered', event)
}


// TODO: Fix input field resizing on error
// TODO: Fix button border on focus
// TODO: Add forgot password

</script>
<template>
  <div class="column">
    <div class="text-h5 text-center q-mb-lg text-weight-bold">Sign Up</div>
    <q-card class="q-pa-lg shadow-1">
      <q-card-section>
        <div class="flex column">
          <label for="email" class="input-label q-ml-xs q-mb-sm">Email</label>
          <q-input id="email" v-model.trim="user.email" outlined dense :error="$v.email.$invalid && $v.email.$dirty" :error-message="$v.email.$invalid ? $v.email.$silentErrors[0].$message : ''"/>
          <label for="password" class="input-label q-ml-xs q-mb-sm q-mt-lg">Password</label>
          <q-input id="password" v-model.trim="user.password" type="password" outlined dense :error="$v.password.$invalid && $v.password.$dirty" :error-message="$v.password.$invalid ? $v.password.$silentErrors[0].$message : ''"/>
          <label for="password" class="input-label q-ml-xs q-mb-sm q-mt-lg">Confirm your password</label>
          <q-input id="password" v-model.trim="user.confirm" type="password" outlined dense :error="$v.confirm.$invalid && $v.confirm.$dirty" :error-message="$v.confirm.$invalid ? $v.confirm.$silentErrors[0].$message : ''"/>
          <q-btn class="q-mt-xl q-mb-lg btn-primary" @click="signUpWithPassword" no-caps flat :disabled="$v.$invalid">Create your account</q-btn>
          <div class="row items-center q-mt-lg q-mb-lg text-slate-500">
            <hr class="col">
            <span class="col-auto text-no-wrap q-px-md">or continue with</span>
            <hr class="col">
          </div>
          <SignInProviders
            :providers="authProviders" icon-size="1.2rem" class="q-px-xl"
            @signed-in="emitSignedIn($event)"
            @sign-in-started="emitStarted($event)"
            @sign-in-ended="emitEnded($event)"
            @error-encountered="emitError($event)"
          />
          <p class="text-primary text-center q-mt-xl router-link-small" @click="router.push({ name: 'sign-in' })">You already have an account?</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped lang="scss">

</style>


