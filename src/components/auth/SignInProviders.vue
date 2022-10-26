<script setup>

import { useAuthStore} from "stores/auth";
import { AuthenticationProvider } from "components/auth/AuthenticationProvider";
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
      return [
        {
          source: AuthenticationProvider.Google,
          title: 'Sign in with Google',
          icon: 'fa-brands fa-google'
        },
        {
          source: AuthenticationProvider.Apple,
          title: 'Sign in with Apple',
          icon: 'fa-brands fa-apple'
        },
        {
          source: AuthenticationProvider.Facebook,
          title: 'Sign in with Facebook',
          icon: 'fa-brands fa-facebook'
        },
        {
          source: AuthenticationProvider.Twitter,
          title: 'Sign in with Twitter',
          icon: 'fa-brands fa-twitter'
        },
        {
          source: AuthenticationProvider.Github,
          title: 'Sign in with Github',
          icon: 'fa-brands fa-github'
        },
        {
          source: AuthenticationProvider.LinkedIn,
          title: 'Sign in with LinkedIn',
          icon: 'fa-brands fa-linkedin'
        },
      ]
    }
  }
})

const signIn = (provider) => {
  emit('signInStarted', provider)
  auth.signInWithProvider(provider).then(user => {
    emit('signedIn', provider)
  }).catch(error => {
    console.log(error)
    emit('errorEncountered', error)
  }).finally(() => {
    emit('signInEnded', provider)
  });
}

</script>

<template>
  <div v-if="vertical" class="flex column justify-between" id="vertical-provider-buttons">
    <div v-for="provider in providers" :key="provider.source" class="row col justify-start items-center provider-button scale-less" @click="signIn(provider.source)">
      <q-icon class="col-1 q-mx-md" :name="provider.icon" :size="iconSize"/>
      <div class="col text-no-wrap q-mr-lg">{{ provider.title }}</div>
    </div>
  </div>
  <div v-else class="flex row justify-between" id="horizontal-provider-buttons">
    <div v-for="provider in providers" :key="provider.source">
      <div class="flex flex-center col provider-button" @click="signIn(provider.source)">
        <q-icon :name="provider.icon" :size="iconSize"/>
      </div>
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
