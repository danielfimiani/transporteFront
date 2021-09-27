<template>
    <div class="h-screen flex flex-col">
        <NavBar @toggleSideBar="toggle = !toggle"></NavBar>
        <div class="h-full flex">
            <SideBar v-show="toggle"/>
            <section class="w-full">
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
    data(){return {toggle:false}},
    components: { SideBar , NavBar}
}
</script>