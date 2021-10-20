<template>
  <div class="hero min-h-full bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Consutla Serie</h1>
        <div class="form-control">
          <div class="relative">
            <input
              v-model="serie"
              v-on:keyup.enter="handlePressSearchSerie()"
              type="text"
              placeholder="Serie"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button
              @click.prevent="handlePressSearchSerie()"
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              go
            </button>
          </div>
        </div>
        <h2 class="pt-3">Ingrese una serie para obtener inforación 😄</h2>

        <div class="divider"></div>

        <div v-if="objserie.length != 0" class="container">
          <div v-for="serie in objserie" :key="serie.id_serie">
            <p>Estado : {{ serie.estado }}</p>
            <p>Deposito : {{ serie.deposito }}</p>
            <p>Ubicacion : {{ serie.ubicacion }}</p>

            <p>Fecha Desde : {{ serie.fecha }}</p>
            <p>Fecha Hasta : {{ serie.fechaRecepcion }}</p>

            <p>Cant Bultos : {{ serie.cantidadBultos }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serie: "",
      objserie: [],
    };
  },
  methods: {
    async handlePressSearchSerie() {
      let url =
        process.env.VUE_APP_OT_DEPOSITO +
        `/api/SerieItem/GetSerieItem?id_serie=${this.serie}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => (this.objserie = JSON.parse(data.data)))
        .catch((e) =>
          this.$notify(
            {
              group: "error",
              title: "Error",
              text: `No se pudo consultar la serie ${e.toString()}`,
            },
            2000
          )
        );
      this.serie='';
    },
  },
};
</script>

<style>
</style>