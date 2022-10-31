<template>
  <q-page paddinf class="flex flex-center">
    <div class="text-h3">Public Home Page (index.html)</div>
  </q-page>
</template>

<script setup>
import { api } from "boot/axios";

import { useAuthStore} from "stores/auth";
import { useRouter } from "vue-router";
import SignInProviders from "components/auth/SignInProviders.vue";

const router = useRouter()

const auth = useAuthStore();

import { appAuthProviders } from "/src/components/auth/app-auth-providers.ts"
import ColorVariants from "components/util/ColorVariants.vue";

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
