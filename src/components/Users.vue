<template>
    <div class="card text-center shadow-xl p-8 min-h-full bg-white overflow-hidden">
        <div class="flex justify-center items-center h-full">
            <div v-if="users.length != 0" class="w-full">
                <h1 class="text-4xl text-center mt-8">Usuarios del Sistema.</h1>

                <div class="w-full p-16">
                    <table class="table table-compact w-full max-h-full" v-if="users">
                        <thead>
                        <tr>
                            <th>Username</th> 
                            <th>Nomrbe y Apellido</th> 
                            <th>Email</th>
                            <th></th>
                        </tr>
                        </thead> 
                        <tbody>
                        <tr v-for="user in users" :key="user.nombre_apellido">            
                            <!-- User name -->
                            <td>
                                <div class="font-bold">
                                    {{user.UserName.toUpperCase()}}
                                </div> 
                            </td> 
                            <!-- User name -->
                            <td>
                                <div class="font-bold">
                                    {{user.nombre_apellido}}
                                </div> 
                            </td> 
                            <!-- User email -->
                            <td>
                                <div class="font-bold">
                                    {{user.mail}}
                                </div>
                            </td> 
                            <td>
                                <div class="flex justify-around">
                                    <button class="btn btn-sm btn-info">Editaar</button> 
                                    <button class="btn btn-sm btn-error" @click="showModal = true">Borrar</button>
                                </div>
                            </td>
                        </tr>
                        </tbody> 
                    </table>
                    <h1 v-else>No hay datos.</h1>
                
                    <ModalConfirm v-if="showModal" @no="showModal = false"></ModalConfirm>
                </div>
            </div>
            <h1 v-else class="text-4xl text-center">Nada para mostrar aqui 😊</h1>
        </div>
    </div>
</template>
<script>
import ModalConfirm from '@/components/ModalConfirm'
export default {
    name : 'Users',
    components : {
        ModalConfirm
    },
    data(){
        return {
        users : [],
        showModal:false
        }
    },
    async mounted(){
        await fetch(process.env.VUE_APP_ROOT_API+'/api/Usuario/GetUsuarios')
        .then(res => res.json())
        .then(data => this.users = JSON.parse(data.data))
        .catch(e=> console.error(e));
    }
}
</script>

<style scoped>
    td {
        padding: 0.25rem !important;
    }
</style>