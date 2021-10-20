<template>
    <div class="card text-center shadow-xl min-h-full bg-white overflow-hidden">
        <div class="flex justify-center items-center h-full">
            <div v-if="users.length != 0" class="w-full">
                <h1 class="text-4xl text-center my-8">Usuarios del Sistema.</h1>

                <div class="w-full px-16">
                    
                    <button class="btn btn-sm btn-info float-left mb-4" @click.prevent="editUser('')">+ Crear Usuario</button> 
                    
                    <table class="table table-compact w-full max-h-full" v-if="users">
                        <thead>
                        <tr>
                            <th>Username</th> 
                            <th>Nomrbe y Apellido</th> 
                            <th>Email</th>
                            <th>S/N ACTIVO</th>
                            <th></th>
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
                            <!-- User Active -->
                            <td>
                                <div v-if="user.activo=='1'" class="badge badge-success">
                                    Activo
                                </div>
                                <div v-else class="badge badge-warning">
                                    Inactivo
                                </div>
                            </td> 
                            <td>
                                <button class="btn btn-sm btn-info" @click.prevent="editUser(user.UserName)">Editar</button> 
                            </td>
                            <td>
                                <button v-if="user.activo=='1'" class="btn btn-sm btn-error" @click.prevent="deleteUser(user.UserName)">Deshabiltiar</button>
                                <button v-else class="btn btn-sm btn-error" @click.prevent="deleteUser(user.UserName)">Habilitar</button>
                                
                            </td>
                        </tr>
                        </tbody> 
                    </table>
                    
                    <h1 v-else>No hay datos.</h1>
                
                    <ModalConfirm v-if="showModalDelete" @closeModal="updateForm" :userDelete="userEdit"/>
                    <ModalCreateEdit v-if="showModalCreateEdit" @closeModal="updateForm" :userEdit="userEdit"/>
                </div>
            </div>
            <div v-else class="h-full flex items-center justify-center">
                <h1 class="text-4xl text-center">Nada para mostrar aqui 😊</h1>
            </div>
        </div>
    </div>
</template>
<script>
import ModalConfirm from '@/components/Users/ModalConfirm';
import ModalCreateEdit from '@/components/Users/ModalCreateEdit';

export default {
    name : 'Users',
    components : {ModalConfirm,ModalCreateEdit},
    data(){
        return {
        users : [],
        userEdit:'',
        showModalDelete:false,
        showModalCreateEdit:false
        }
    },
    async mounted(){
        await fetch(process.env.VUE_APP_OT_LOGISTICA+'/api/Usuario/GetUsuarios')
        .then(res => res.json())
        .then(data => this.users = JSON.parse(data.data))
        .catch(e=> console.error(e));
    },
    methods:{
        deleteUser(username) {
            this.userEdit = username;
            
            this.showModalDelete = true;
        },
        editUser(username){
            this.userEdit = username;
            this.showModalCreateEdit = true;
        },
        updateForm(){
            fetch(process.env.VUE_APP_OT_LOGISTICA+'/api/Usuario/GetUsuarios')
            .then(res => res.json())
            .then(data => this.users = JSON.parse(data.data))
            .catch(e=> console.error(e));
            this.showModalDelete = false;
            this.showModalCreateEdit = false;
        }
    }
}
</script>
<style scoped>
    td {
        padding: 0.25rem !important;
    }
</style>
