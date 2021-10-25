<template>            
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="btn bg-gray-100 text-center">
            <p class="text-gray-900">Versiones</p>
        </div> 
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-56">
            <li class="text-black">
                <p @click="LogOut" class="m-auto">API DEPOSITO: v{{OT_DEPOSITO}}</p> 
            </li> 
            <li class="text-black">
                <p @click="LogOut" class="m-auto">API LOGISTICA: v{{OT_DEPOSITO}}</p> 
            </li> 
            <li class="text-black">
                <p @click="LogOut" class="m-auto">FRONT: v{{FRONT}} </p> 
            </li> 
        </ul>
    </div>
</template>
<script>
import {version} from '../../../package.json';
export default {
    data(){
        return {
            OT_DEPOSITO : '',
            OT_LOGISTICA : '',
            FRONT : ''
        }
    },
    mounted(){
      this.GetVersion();
    },
    methods:{
        async GetVersion(){
            let urldepo = process.env.VUE_APP_OT_DEPOSITO+'/Api/GetVersion';
            let urllogi = process.env.VUE_APP_OT_LOGISTICA+'/Api/GetVersion';
            // Front
            this.FRONT = version;
            // Deposito
            await fetch(urldepo).then(res => res.json()).then(data => this.OT_DEPOSITO = data.data);
            // Transporte
            await fetch(urllogi).then(res => res.json()).then(data => this.OT_LOGISTICA = data.data);
            console.log('Entro al getversiones' , urldepo,urllogi , this.OT_DEPOSITO,this.OT_LOGISTICA);
            setTimeout(this.GetVersion, 10000);
        }
    }
}
</script>
