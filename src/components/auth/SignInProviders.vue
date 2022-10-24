<script setup>

import { useAuthStore} from "stores/auth";
const auth = useAuthStore();

const emit = defineEmits(['signedIn', 'signInStarted', 'signInEnded', 'errorEncountered']);

defineProps({
  iconSize : {
    type: String,
    default: '1rem'
  },
  vertical: {
    type: Boolean,
    default: false
  },
  providers: {
    type: Object,
    default: () => {
      return {
        google: {
          title: 'Google',
          icon: 'fa-brands fa-google',
        },
        apple: {
          title: 'Apple',
          icon: 'fa-brands fa-apple',
        },
        facebook: {
          title: 'Facebook',
          icon: 'fa-brands fa-facebook',
        },
        twitter: {
          title: 'Twitter',
          icon: 'fa-brands fa-twitter',
        },
        github: {
          title: 'Github',
          icon: 'fa-brands fa-github',
        },
        linkedIn: {
          title: 'LinkedIn',
          icon: 'fa-brands fa-linkedin',
        },
      }
    }
  }
})

const signInWithGoogle = () => {
  emit('signInStarted', 'google')
  auth.signInWithGoogle().then(user => {
    console.log(user)
    emit('signedIn', 'google')
  }).catch(error => {
    console.log(error)
    emit('errorEncountered', error)
  }).finally(() => {
    emit('signInEnded', 'google')
  });
}
</script>

<template>
  <div v-if="vertical" class="flex column justify-between" id="vertical-provider-buttons">
    <div v-if="'google' in providers" class="row col justify-start items-center provider-button scale-less" @click="signInWithGoogle">
      <q-icon class="col-1 q-mx-md" :name="providers.google.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.google.title }}</div>
    </div>
    <div v-if="'apple' in providers" class="row col justify-start items-center provider-button scale-less">
      <q-icon class="col-1 q-mx-md " :name="providers.apple.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.apple.title }}</div>
    </div>
    <div v-if="'facebook' in providers" class="row col justify-start items-center provider-button scale-less">
      <q-icon class="q-mx-md col-1" :name="providers.facebook.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.facebook.title }}</div>
    </div>
    <div v-if="'twitter' in providers" class="row col justify-start items-center provider-button scale-less">
      <q-icon class="q-mx-md col-1" :name="providers.twitter.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.twitter.title }}</div>
    </div>
    <div v-if="'github' in providers" class="row col justify-start items-center provider-button scale-less">
      <q-icon class="q-mx-md col-1" :name="providers.github.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.github.title }}</div>
    </div>
    <div v-if="'linkedIn' in providers" class="row col justify-start items-center provider-button scale-less">
      <q-icon class="q-mx-md col-1" :name="providers.linkedIn.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ providers.linkedIn.title }}</div>
    </div>
  </div>
  <div v-else class="flex row justify-between" id="horizontal-provider-buttons">
    <div v-if="'google' in providers" class="flex flex-center col provider-button" @click="signInWithGoogle">
      <q-icon :name="providers.google.icon" :size="iconSize"/>
    </div>
    <div v-if="'apple' in providers" class="flex flex-center col provider-button">
      <q-icon :name="providers.apple.icon" :size="iconSize"/>
    </div>
    <div v-if="'facebook' in providers" class="flex flex-center col provider-button">
      <q-icon :name="providers.facebook.icon" :size="iconSize"/>
    </div>
    <div v-if="'twitter' in providers" class="flex flex-center col provider-button">
      <q-icon :name="providers.twitter.icon" :size="iconSize"/>
    </div>
    <div v-if="'github' in providers" class="flex flex-center col provider-button">
      <q-icon :name="providers.github.icon" :size="iconSize"/>
    </div>
    <div v-if="'linkedIn' in providers" class="flex flex-center col provider-button">
      <q-icon :name="providers.linkedIn.icon" :size="iconSize"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.provider-button {
  border-radius: 6px;
  border: $slate-300 solid 0.07rem;
  padding: 0.7rem 0.9rem;
  color: $slate-500;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  font-size: 1rem;
}

.provider-button:hover {
  color: $primary;
  border: $primary solid 0.08rem;
  background: $primary-subtle;
  transition: all 0.2s ease-in-out;
  transform: scale(1.05);
}

.scale-less:hover {
  transform: scale(1.02) !important;
}

#vertical-provider-buttons > div:not(:first-child) {
  margin-top: 0.3rem;
}

#horizontal-provider-buttons > div:not(:first-child) {
  margin-left: 0.3rem;
}

</style>
