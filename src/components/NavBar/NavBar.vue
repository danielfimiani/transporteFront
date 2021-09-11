<template>
    <div class="navbar shadow-lg bg-neutral text-neutral-content w-ful">
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
    components : {UserButton}
}
</script>
