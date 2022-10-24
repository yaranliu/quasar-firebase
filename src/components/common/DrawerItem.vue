<template>
  <q-item
    v-if="!requiresAuth || auth.isAuthenticated"
    clickable
    @click="router.push({ name: target })"
    :active="router.currentRoute.value.name === target" active-class="bg-primary-darker text-white"
    class="items-center"
  >
    {{ label }}
  </q-item>
</template>

<script setup>
import { defineProps } from "vue"
defineProps(
  {
    requiresAuth: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
    },
    label: {
      type: String
    }
  }
)

import { useRouter } from 'vue-router'
const router = useRouter()

import { useAuthStore } from 'stores/auth'
const auth = useAuthStore()

</script>
