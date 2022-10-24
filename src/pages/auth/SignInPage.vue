<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();

import _string from 'lodash/string';

import SignInCard from "components/auth/SignInCard.vue";

import { useRouter } from "vue-router";
const router = useRouter()

import { useAuthStore } from "stores/auth";
const auth = useAuthStore()

const onSignedIn = (provider) => {
  console.log("Signed In with " + provider)
  router.push({ name: 'home'})
}

const onSignInStarted  = (provider) => {
  console.log("Signing in with " + provider)
  let message = 'Signing in with ' + (provider === 'password' ? 'User Credentials' : _string.upperFirst(provider) )
  $q.loading.show({ message: message })
}

const onSignInEnded  = (provider) => {
  console.log("Sign in completed with " + provider)
  $q.loading.hide()
}

const onError = (error) => {
  console.log(error)
}

</script>
<template>
  <q-page padding class="flex flex-center bg-slate-50">
    <SignInCard
      v-show="!auth.inProgress && !auth.isAuthenticated"
      @signed-in="onSignedIn"
      @sign-in-started="onSignInStarted"
      @sign-in-ended="onSignInEnded"
      @error-encountered="onError"
    />
    <div v-show = "auth.inProgress && !auth.isAuthenticated" >Please wait</div>
  </q-page>
</template>
<style scoped lang="scss">
</style>


