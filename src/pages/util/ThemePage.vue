<template>
  <q-page padding >
    <table>
      <tr>
        <td>Primary</td>
        <td><ColorVariants variable="primary" /></td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td><ColorVariants variable="secondary" /></td>
      </tr>
      <tr>
        <td>Tertiary</td>
        <td><ColorVariants variable="tertiary" /></td>
      </tr>
      <tr>
        <td>Danger</td>
        <td><ColorVariants variable="danger" /></td>
      </tr>
      <tr>
        <td>Warning</td>
        <td><ColorVariants variable="warning" /></td>
      </tr>
      <tr>
        <td>Success</td>
        <td><ColorVariants variable="success" /></td>
      </tr>
      <tr>
        <td>Info</td>
        <td><ColorVariants variable="info" /></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class="text-base font-extrabold">Base</div>
    <div class="text-2xl font-thin">2xl</div>
  </q-page>
</template>

<script setup>

import { useAuthStore} from "stores/auth";
import { useRouter } from "vue-router";

const router = useRouter()

const auth = useAuthStore();

import ColorVariants from "components/util/ColorVariants.vue";

</script>
<style scoped>
td:first-child {
  padding: 1rem;
  font-weight: 600;
}
</style>
