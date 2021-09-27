<template>
    <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-none">
            <label for="drawer" class="btn btn-square btn-ghost drawer-button" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
            </svg>
            </label>
        </div> 

        <div class="flex-1 hidden px-2 mx-2 lg:flex">
            <span class="text-lg font-bold">
                Ourense Transporte
            </span>
        </div>         
        
        <div class="flex-none">
            <UserButton></UserButton>
        </div>
    </div>
</template>
<script>
import UserButton from '@/components/NavBar/UserButton.vue';
export default {
    name : 'NavBar',
    components : {UserButton},
    methods:{
        toggleSideBar(){
            this.$emit('toggleSideBar');
        }
    }
}
</script>
