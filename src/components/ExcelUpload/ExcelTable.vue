<template>
  <div class="overflow-x-auto">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th>Pallet</th>
          <th>Embarque</th>
          <th>Contenedor</th>
          <th>Origen</th>
          <th>Factura</th>
          <th>Observacion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.pallet">
          <td>{{ row.pallet }}</td>
          <td>{{ row.embarque }}</td>
          <td>{{ row.contenedor }}</td>
          <td>{{ row.origen }}</td>
          <td>{{ row.factura }}</td>
          <td>{{ row.observacion }}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name : 'ExcelTable',
    props : { rows : [] }
};
</script>