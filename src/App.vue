<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isAuthenticated : false
    }
  },
  methods:{
    userLogin(){
      this.isAuthenticated = true
      this.$router.push('/home')
    }
  }
}
</script>