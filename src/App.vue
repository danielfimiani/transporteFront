<template>
  <router-view></router-view>
  <Notifications/>
</template>

<script>
import Notifications from '@/components/Notifications/Notification.vue'
export default {
  name: 'App',
  components:{Notifications}
}
</script>