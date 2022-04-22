<template>
  <div class="p-5">
    <!-- Form -->
    <div class="flex flex-row w-full justify-center items-center">
      <h2 class="mb-3 mr-5 text-3xl font-bold">Consutla Serie</h2>

      <div class="form-control flex flex-row justify-between w-4/5">
        <div class="relative w-1/3">
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
            :class="loading ? 'loading disabled' : ''"
          >
            {{ loading ? "" : "Buscar" }}
          </button>
        </div>
        <button
          v-if="objserie.length != 0"
          class="btn btn-error btn-xl"
          @click="clear()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Limpiar
        </button>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <div v-if="objserie.length != 0">
      <!-- Infor Serie -->
      <SerieInfo :objserie="objserie" />

      <!-- Hist Flujo -->
      <TFlujo :objserie="objserie" />
    </div>
  </div>
</template>

<script>
import TFlujo from "@/components/ConsultaSerie/TFlujo";
import SerieInfo from "@/components/ConsultaSerie/SerieInfo";
export default {
  data() {
    return {
      serie: "",
      objserie: [], 
      loading: false,
    };
  },
  components: { TFlujo, SerieInfo },
  methods: {
    async handlePressSearchSerie() {
      this.loading = true;
      this.objserie = [];
      let url =
        process.env.VUE_APP_OT_DEPOSITO +
        `/api/SerieItem/GetSerieItem?id_serie=${this.serie}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.success == "ok") {
            console.log(data.data)
            this.objserie.push(JSON.parse(data.data));
          } else {
            this.$notify(
              {
                group: "error",
                title: "Error",
                text: data.errorMessage,
              },
              2000
            );
          }
        })
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
      this.serie = "";
      this.loading = false;
    },
    clear() {
      this.objserie = [];
      this.serie = "";
    },
  },
};
</script>

<style>
</style>