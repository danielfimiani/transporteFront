<template>
  <div class="bg-white font-family-karla h-screen w-full">
      <div class="w-full flex flex-wrap">
          <!-- Login Section -->
          <div class="w-full md:w-1/2 flex flex-col">
              <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                  <a href="#" class="bg-yellow-600 text-white font-bold text-xl p-4">OURENSE</a>
              </div>
              <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                  <p class="text-center text-3xl">Bienvenido.</p>
                  <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="Login">
                      <div class="flex flex-col pt-4">
                          <label for="email" class="text-lg">Usuario</label>
                          <input type="text" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required>
                      </div>
      
                      <div class="flex flex-col pt-4">
                          <label for="password" class="text-lg">Contraseña</label>
                          <input type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
      
                      <input type="submit" value="Iniciar Sesion" class="bg-yellow-600 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" v-if="!spiner">

                      <Spinner v-if="spiner" />
                  </form>
              </div>
          </div>

          <!-- Image Section -->
          <div class="w-1/2 shadow-2xl">
              <img class="object-cover w-full h-screen hidden md:block" src="../assets/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpg">
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import {toastDanger} from '@/toasts/toast.js'
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
            localStorage.setItem('User',user);
            this.spiner = !this.spiner;
            this.$router.push({path : '/MainLayout'})
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

<style scoped>
  .lds-ring {
    align-self: center;
  }
</style>