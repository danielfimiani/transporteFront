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

                        <label for="hidden-inpout">Seleccionar archivo</label>
                        <input id="hidden-input" type="file" class="btn w-64"/>
                        
                    </header>
                </section>
            </main>
        </div>
    </div>
</template>
