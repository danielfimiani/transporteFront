<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-1" v-for="serie in objserie" :key="serie.id_serie">
    <div class="px-4 py-5 sm:px-6 flex flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Informacion de Serie
        </h3>
        <p class="ml-5 text-bold max-w-2xl text-base text-green-500">
          {{serie.id_serie}}
        </p>
      </div>
      <div class="flex flex-row items-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Cantidad de bultos
        </h3>
        <p class="ml-5 text-bold max-w-2xl text-base text-gary-900">
          {{serie.cantidadBultos}}
        </p> 
      </div>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50" :class="rowheader">
          <dt class="text-sm font-medium text-gray-500">
            Estado
          </dt>
          <dd :class="rowinfo">
            {{serie.estado}}
          </dd>
        </div>
        <div class="bg-white" :class="rowheader">
          <dt class="text-sm font-medium text-gray-500">
            Deposito
          </dt>
          <dd :class="rowinfo">
            {{serie.deposito}}
          </dd>
        </div>
        <div class="bg-gray-50" :class="rowheader">
          <dt class="text-sm font-medium text-gray-500">
            Ubicacion
          </dt>
          <dd :class="rowinfo">
            {{serie.ubicacion}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      rowheader : 'px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6',
      rowinfo :'mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'
    }
  },
  props: { objserie: [] }, 
}
</script>