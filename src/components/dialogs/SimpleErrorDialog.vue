<script setup>
import { defineProps } from "vue"
defineProps(
  {
    value: {
      type: Boolean,
    },
    title: {
      type: String,
      default: 'Error'
    },
    message: {
      type: String,
      default: 'Message'
    },
  }
)

</script>
<template>
  <q-dialog v-model="value" persistent>
    <div class="bg-white q-pa-md">
      <div class="q-px-lg q-py-md rounded-borders text-bold">
        {{ title }}
      </div>
      <div class="q-px-lg q-py-sm q-mb-lg">
        {{ message  }}
      </div>
      <div class="q-px-lg q-py-md">
        <q-btn class="btn-danger" label="Close" v-close-popup no-caps flat/>
      </div>
    </div>
  </q-dialog>
</template>

