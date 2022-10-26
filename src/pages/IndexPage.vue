<template>
  <q-page class="flex flex-center">
    <div class="column">
      <SignInProviders :providers="appAuthProviders" />
      <SignInProviders vertical :providers="appAuthProviders" />
    </div>

  </q-page>
</template>

<script setup>
import { api } from "boot/axios";

import { useAuthStore} from "stores/auth";
import { useRouter } from "vue-router";
import SignInProviders from "components/auth/SignInProviders.vue";

const router = useRouter()

const auth = useAuthStore();

import { appAuthProviders } from "/src/components/auth/app-auth-providers.js"

const emit = defineEmits(['signedIn', 'started', 'ended']);

const signInWithGoogle = () => {
  emit('started', 'Google')
  auth.signInWithGoogle().then(user => {
    console.log(user)
    emit('signedIn')
  }).catch(error => {
    console.log(error)
  }).finally(() => {
    emit('ended')
  })
}

</script>
