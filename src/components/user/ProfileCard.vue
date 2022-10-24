<script setup>
import { onMounted } from 'vue'
import { useAuthStore} from "stores/auth";
const auth = useAuthStore();

defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  console.log(auth.user)
})

</script>

<template>
  <div class="absolute-center fit profile-card items-center" :class="{'column' : vertical, 'row' : !vertical }" v-if="!auth.inProgress && auth.isAuthenticated">
    <div class="">
      <q-avatar v-if="auth.hasAvatar" class="bg-white" size="96px">
        <img alt="User Profile Photo" :src="auth.hasAvatar ? auth.avatar : ''" referrerpolicy="no-referrer" class="avatar-image"/>
      </q-avatar>
    </div>
    <div class="column q-px-md">
      <div :class="{ 'user-display-name' : !vertical, 'user-display-name-vertical' : vertical }">
        {{ auth.displayName }}
      </div>
      <div class="user-email" :class="{'text-center' : vertical }">
        {{ auth.user.email }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.profile-card {
  padding: 2rem;
}

.avatar-image {
  border: 0.15rem solid white;
  padding: 0.1rem;
}
.user-display-name {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 10px;
  color: white;
}
.user-display-name-vertical {
  @extend .user-display-name;
  font-size: 1rem;
}
.user-email {
  font-size: 0.75rem;
  font-weight: 300;
  margin-top: 4px;
  color: white;
}
</style>

