<template>
  <q-page padding class="flex flex-center">
    <div class="text-h3">User's HomePage</div>
    <div class="text-h5">Auth provider is {{ auth.provider.Provider }}</div>
  </q-page>
</template>

<script setup>
import { onMounted} from "vue";

import { useRouter} from "vue-router";
const router = useRouter()

import { useAuthStore } from "stores/auth";
const auth = useAuthStore()

onMounted(() => {

})
</script>
