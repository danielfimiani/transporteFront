<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone w-full my-12 border-2 border-dashed bg- border-gray-900 p-8 py-11"
  >
    <span>Arrastra o suelta archivos</span>
    
    <div class="flex flex-col w-full">
        <div class="divider w-4/5 mx-auto"></div> 
    </div>

    <label class="btn" for="dropzoneFile">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">   
            
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        Elegir archivo
    </label>
    <input type="file" id="dropzoneFile" class="dropzoneFile" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>
<style>
.dropzone input {
    display: none;
}

.active-dropzone {
    background-color:rgb(156, 163, 175)
}
</style>