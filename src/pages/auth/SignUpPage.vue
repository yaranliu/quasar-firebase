<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();

import _string from 'lodash/string';

import SignUpCard from "components/auth/SignUpCard.vue";

import { useRouter } from "vue-router";
const router = useRouter()

const onSignedIn = (provider) => {
  console.log("Signed In with " + provider)
  router.push({ name: 'me'})
}

const onSignUpStarted  = (provider) => {
  console.log("Signing up with " + provider)
  let message = 'Signing in with ' + (provider === 'password' ? 'User Credentials' : _string.upperFirst(provider) )
  $q.loading.show({ message: message })
}

const onSignUpEnded  = (provider) => {
  console.log("Sign up completed with " + provider)
  $q.loading.hide()
}

const onError = (error) => {
  console.log(error)
}

</script>
<template>
  <q-page padding class="flex flex-center bg-slate-50">
    <SignUpCard
      @signed-in="onSignedIn"
      @sign-up-started="onSignUpStarted"
      @sign-up-ended="onSignUpEnded"
      @error-encountered="onError"
    />
  </q-page>
</template>
<style scoped lang="scss">
</style>


