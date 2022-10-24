<template>
  <router-view />
</template>

<script setup>
import { api } from 'boot/axios'

import { useAuthStore} from "stores/auth";
const auth = useAuthStore();

import { onMounted } from 'vue'

onMounted(() => {
  api.defaults.headers.common["Content-Type"] = "application/json";
  api.defaults.headers.common["Accept"] = "application/json";
  auth.setup()

})

</script>
