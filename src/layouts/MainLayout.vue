<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title @click="router.push({ name: 'home' })" class="cursor-pointer" >
          <div class="column q-py-sm">
            <div>{{ app.name }}</div>
            <div style="font-size: 0.7rem">{{ app.description }}</div>
          </div>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-slate-50 text-primary"
    >
      <q-img v-if="auth.isAuthenticated" src="src/assets/profile-cover/cover-7.jpg" fit="cover" position="center" height="220px" no-spinner @click="router.push({ name: 'home' })">
        <ProfileCard vertical />
      </q-img>
      <q-list>
        <span v-if="auth.isAuthenticated">
          <q-item-label header class="text-overline text-slate-500">User</q-item-label>
          <drawer-item target="me" label="Home" requires-auth/>
          <drawer-item target="inbox" label="Inbox" requires-auth/>
          <q-separator />
          <q-item v-if="auth.isAuthenticated" clickable @click="signOut" class="items-center">Logout</q-item>
          <q-separator />
        </span>
        <q-item-label header class="text-overline text-slate-500">Navigation</q-item-label>
        <drawer-item target="home" label="Index" />
        <drawer-item target="news" label="News" />
        <drawer-item target="support" label="Support" />
        <q-item-label header class="text-overline text-slate-500">Utility</q-item-label>
        <drawer-item target="util-theme" label="Theme" />
        <q-separator />
        <drawer-item v-if="!auth.isAuthenticated" target="sign-in" label="Sign In" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { useAuthStore } from 'stores/auth'
import ProfileCard from "components/user/ProfileCard.vue";
import DrawerItem from "components/common/DrawerItem.vue";
const auth = useAuthStore()


const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const app = {
  name: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION
}


const signOut = () => {
  auth.signOut().then(() => {
    router.push({ name: 'sign-in' })
  }).catch(error => {
    console.log(error)
  });
}




</script>
