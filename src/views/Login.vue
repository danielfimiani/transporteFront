<template>
  <div class="bg-white flex justify-center items-center min-h-screen">
      <!-- Login Section -->
      <div class="flex flex-col w-2/5">
          
          <div class="mt-12 ml-12 top-0 left-0 absolute">
              <a href="#" class="font-bold text-xl p-4">OURENSE TRANSPORTE</a>
          </div>

          <div class="flex flex-col justify-center my-auto pt-8 px-8">
              <p class="text-center text-3xl">Bienvenido.</p>
              <form class="flex flex-col pt-3 w-full" @submit.prevent="Login">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Usuario</span>
                    </label> 
                    <input type="text" placeholder="" class="input input-lg input-bordered">
                  </div> 

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Contraseña</span>
                    </label> 
                    <input type="password" placeholder="" class="input input-lg input-bordered">
                  </div> 

                  <input type="submit" value="Iniciar Sesion" class="btn btn-lg mt-4" v-if="!spiner">

                  <Spinner v-if="spiner" class="mt-10"/>
              </form>
          </div>
      </div>                
  </div>
</template>

<script>
import axios from 'axios';
import {toastDanger, toastSuccess} from '@/toasts/toast.js'
import Spinner from '../components/Spinner.vue';
  export default {
    name: "Login",    
    components: {
      Spinner
    },
    data(){
      return{ 
        spiner : false
      }
    },
    mounted() {
      if (localStorage.getItem('User')){
        this.$router.push({path : '/MainLayout'})
      }
    },
    methods: {
      async Login(){
        this.spiner = !this.spiner;
        let url = process.env.VUE_APP_ROOT_API+'/api/Login/AuthenticateUser';
        
        let credentials  = {
          "userName": "mdaruich",
          "password": "gtl6a54hQsEY6r8mjArSF2Ubg2o="
        }

        await axios.post(url, credentials)
        .then(res => {
          if(res.data.success == 'ok'){
            let user = {
              'nombre': 'Mario Daruich',
              'expiricy' : Date.now() + 7 
            }
            localStorage.setItem('User',JSON.stringify(user));
            this.spiner = !this.spiner;
            this.$router.push({path : '/MainLayout'})
            toastSuccess(`Bienvenido ${user.nombre.toUpperCase()}`)
          }
        })
        .catch(e => {
          console.log(e)
          this.spiner = !this.spiner;
          toastDanger("Na se ha podido inicar la sesión , por favor intente de nuevo mas tarde..")
        });
      }
    }
  };
</script>
