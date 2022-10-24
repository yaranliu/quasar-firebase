<template>
  <q-page padding class="flex flex-center">
    <div class="text-h3">User's HomePage</div>
  </q-page>
</template>

<script setup>
import { onMounted} from "vue";

import { useRouter} from "vue-router";
const router = useRouter()
onMounted(() => {
  console.log(router.currentRoute)
})
</script>
