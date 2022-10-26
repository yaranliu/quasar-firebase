<script setup>

import { ref, reactive } from "vue"

const showError = ref(false)

import { useQuasar } from 'quasar';
const $q = useQuasar();

import _string from 'lodash/string';

import SignInCard from "components/auth/SignInCard.vue";

import { useRouter } from "vue-router";
const router = useRouter()

import { useAuthStore } from "stores/auth";
import SimpleErrorDialog from "components/dialogs/SimpleErrorDialog.vue";
const auth = useAuthStore()

const onSignedIn = (provider) => {
  router.push({ name: 'me'})
}

const onSignInStarted  = (provider) => {
  let message = 'Signing in with ' + (provider === 'password' ? 'User Credentials' : _string.upperFirst(provider) )
  $q.loading.show({ message: message })
}

const onSignInEnded  = (provider) => {
  $q.loading.hide()
}

const onError = (authError) => {
  showError.value = true
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
    <SimpleErrorDialog v-model="showError" title="Authentication error" :message="auth.error.Message" />
  </q-page>
</template>
<style scoped lang="scss">
</style>


