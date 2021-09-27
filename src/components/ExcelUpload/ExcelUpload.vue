<template>
    <div class="card text-center p-8 max-h-full bg-white overflow-hidden">
        
        <h1 class="text-4xl">Importacion de planilla</h1>
        
        <DropZone @drop.prevent="drop" @change="selectedFile"/>

        <span class="file-info">{{ dropzoneFile.name }}</span>

        <div v-if="dropzoneFile.name && !spinner" class="flex justify-between">
            <button  class="btn btn-success mt-16 w-2/6" @click="submitFile">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Subir Archivo
            </button>

            <button class="btn btn-error mt-16 w-2/6" @click="clearDropZone">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Limpiar
            </button>
        </div>

        <Spinner v-if="spinner" class="mt-6"/>
    </div>
</template>
<script>
import readXlsxFile from 'read-excel-file'
import DropZone from '@/components/ExcelUpload/DropZone';
import Spinner from '@/components/Spinner.vue';
import { ref } from "vue";

export default {
    components : {DropZone,Spinner},
    data(){
        return {
            spinner : false
        }
    },
    setup() {
        let dropzoneFile = ref("");
        let freshvalue = dropzoneFile.value;
        
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
        };
        
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
        };

        const clearDropZone = () => {
            dropzoneFile.value = freshvalue;
        }
        
        return { dropzoneFile, drop, selectedFile , clearDropZone};
    },
    methods:{
        submitFile(){
            this.spinner = true;
            const input = document.querySelector(".dropzoneFile");
            readXlsxFile(input.files[0]).then((rows) => {
               console.log(rows);
            })

            this.$notify({group: "success",title: "Success",text: "Archivo Importado con exito!"}, 2000) // 2s
            this.spinner = false ;
            
        }
    }
}
</script>
