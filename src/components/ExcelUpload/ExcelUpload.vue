<template>
    <div class="h-full bg-gray-400 w-full p-16">
        <div class="card text-center shadow-xl p-8 max-h-full bg-white overflow-hidden">
            
            <h1 class="text-4xl">Importacion de planilla</h1>
            
            <main class="container mx-auto h-full">
                <!-- scroll area -->
                <section class="h-full overflow-auto p-8 w-full flex flex-col">
                    <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                        <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                            Arrastra y suelta archivos aqui 
                        </p>
                        
                        <div class="divider"></div> 

                        
                        <button class="btn btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Seleccionar Archivo
                            <input @change="handleInput" id="hidden-input" type="file" class="absolute btn w-64 opacity-0" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                        </button>
                    </header>
                </section>
            </main>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        handleInput(e){
            var files = e.target.files[0];
            console.log(files);
        }
    }
}
</script>
