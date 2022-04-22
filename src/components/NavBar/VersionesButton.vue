<template>            
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="btn bg-gray-100 text-center">
            <p class="text-gray-900">Versiones</p>
        </div> 
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-56">
            <li class="text-black">
                <p class="m-auto">DEPOSITO: v{{OT_DEPOSITO}}</p> 
            </li> 
            <li class="text-black">
                <p class="m-auto">LOGISTICA: v{{OT_LOGISTICA}}</p> 
            </li> 
            <li class="text-black">
                <p class="m-auto">FRONT: v{{FRONT}} </p> 
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
    methods:{
        async GetVersion(){
            let urldepo = process.env.VUE_APP_OT_DEPOSITO+'/Api/GetVersion';
            let urllogi = process.env.VUE_APP_OT_LOGISTICA+'/Api/GetVersion';
            // Front
            this.FRONT = version;
            // Deposito
            await fetch(urldepo).then(data => data.text()).then(data => this.OT_DEPOSITO = data.split('-')[0]);
            // Transporte
            await fetch(urllogi).then(data => data.text()).then(data => this.OT_LOGISTICA = data.split('-')[0]);     

            // console.log('Entro al getversiones' , urldepo,urllogi , this.OT_DEPOSITO,this.OT_LOGISTICA);
        }
    }
}
</script>
