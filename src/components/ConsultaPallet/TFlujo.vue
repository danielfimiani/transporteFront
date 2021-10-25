<template>
  <div class="px-4 sm:px-6 flex flex-row items-center justify-between">
    <div class="flex flex-row items-center">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Historial Flujo
      </h3>
    </div>
  </div>

  <div class="py-2 align-middle inline-block min-w-full">
    <div class="shadow border-b border-gray-200 sm:rounded-lg h-64 overflow-auto">
      <div v-for="pallet in objpallet" :key="pallet.id_pallet">
        <table class="w-full">
          <thead class="bg-gray-50 w-full">
            <tr>
              <th scope="col" :class="th">Fecha</th>
              <th scope="col" :class="th">Deposito Origen</th>
              <th scope="col" :class="th">Ubicacion Origen</th>
              <th scope="col" :class="th">Deposito Destino</th>
              <th scope="col" :class="th">Ubicacion Destino</th>
              <th scope="col" :class="th">Accion</th>
              <th scope="col" :class="th">Usuario</th>
              <th scope="col" :class="th">Terminal</th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="flujo in pallet.flujo" :key="flujo.id_flujo">
              <td :class="td">
                {{ flujo.fecha }}
              </td>

              <td :class="td">
                {{ flujo.depo_origen }}
              </td>

              <td :class="td">
                {{ flujo.ubicacion_origen }}
              </td>

              <td :class="td">
                {{ flujo.depo_destino }}
              </td>

              <td :class="td">
                {{ flujo.ubicacion_destino }}
              </td>

              <td :class="td">
                {{ flujo.accion }}
              </td>

              <td :class="td">
                {{ flujo.usuario }}
              </td>

              <td :class="td">
                {{ flujo.terminal }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      td: "px-4 py-2 whitespace-nowrap text-sm text-gray-500",
      th: "px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    };
  },
  props: { objpallet: [] },
};
</script>