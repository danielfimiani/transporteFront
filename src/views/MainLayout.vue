<template>
    <div class="h-screen w-full flex overflow-hidden select-none">
        <SideBar/>
        <router-view></router-view>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar/SideBar.vue'
export default {
    name: 'MainLayout',
    components: {
        SideBar
    }
}
</script>