<template>
  <div class="h-full w-full p-5 flex flex-row justify-center items-center bg-gray-200">
    
    <!-- Form -->
    <div class="justify-center items-center w-2/4 shadow p-8 bg-white rounded-lg">
      
      <h2 class="mb-3 text-3xl font-bold">Recepcion</h2>

      <div class="form-control flex flex-col justify-between">
        <div class="flex justify-between">
          <div>
            <label class="label">
              <span class="label-text text-xl">NRO PARTE</span>
            </label> 
            <input v-model="nro_parte" type="text" placeholder="Parte" :class="input" />
          </div>

          <div>
            <label class="label">
              <span class="label-text text-xl">CANTIDAD PALLETS</span>
            </label> 
            <input v-model="nro_pallets" type="text" placeholder="N°" :class="input" />
          </div>
        </div>

        <button
          @click="handlePressImprimir()"
          class="rounded-l-none btn btn-primary"
          :class="loading ? 'loading disabled' : ''"
        >
          {{ loading ? "" : "Imprimir" }}
        </button>
      </div>
      <!-- Divider -->
      <div class="divider"></div>    
    </div>

    <div id="print" class="w-full text-center hidden">
        <p class="text-8xl mb-10">NRO PARTE : {{nro_parte}}</p>
        <p class="text-8xl mb-10">NRO PALLET : {{nro_pallets}}</p>
        <svg id="code128"></svg>
    </div>

  </div>
</template>

<script>
const JsBarcode = require('jsbarcode');
import { Printd } from 'printd';
export default {
  data() {
    return {
      input: "input input-primary input-bordered mb-8",
      loading: false,
      nro_parte: "",
      nro_pallets: "",
    };
  },
  methods: {
    handlePressImprimir() {
      JsBarcode('#code128','EP000717574N',);
      const d = new Printd()
      const cssText = `
        div{
          font-family: sans-serif;
          border: solid 1px #ccc;
          text-align: center;
          padding: 1em;
          margin: 2em auto;
          display: inline-block;

        }
        p{
          text-align: center;
          font-size:56px;
          font-family : Consolas;
        }
        svg{
          margin:auto;
        }
      `
      d.print( document.getElementById('print'),[cssText])
    },
  },
};
</script>
<style scoped>
</style>