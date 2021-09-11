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

                        <input id="hidden-input" type="file" class="hidden" />
                        
                        <button class="btn w-64">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">   
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Seleccionar archivo        
                        </button> 
                    </header>
                </section>
                
            </main>
        </div>
    </div>
</template>