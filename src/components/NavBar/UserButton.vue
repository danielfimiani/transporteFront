<template>            
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="m-1 btn">
            <p class="mr-4">{{username}}</p>

            <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
                    <span>{{username.charAt(0).toUpperCase()}}</span>
                </div>
            </div>
        </div> 
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-56">
            <li class="text-black">
                <a @click="LogOut" class="m-auto">Cerrar Sesion</a> 
            </li> 
            <!-- <li>
            <a>Item 2</a>
            </li> 
            <li>
            <a>Item 3</a>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username : ''
        }
    },
    mounted(){
        let user = JSON.parse(localStorage.getItem('User'));
        this.username = user.nombre;
    },
    methods : {
        LogOut() {
         localStorage.removeItem('User');
         this.$router.push({path : '/'});
        }
    }
}
</script>