<template>
    <div class="h-screen flex flex-col">
        <NavBar></NavBar>
        <div class="h-full flex">
            <SideBar class="w-1/5 h-full"/>
            <section class="w-4/5 h-full">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar/SideBar.vue'
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
    name: 'MainLayout',
    components: { SideBar , NavBar}
}
</script>