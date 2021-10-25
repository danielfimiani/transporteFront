<template>
  <div class="p-5">
    <!-- Form -->
    <div class="flex flex-row w-full justify-center items-center">
      <h2 class="mb-3 mr-5 text-3xl font-bold">Consutla Pallet</h2>

      <div class="form-control flex flex-row justify-between w-4/5">
        <div class="relative w-1/3">
          <input
            v-model="pallet"
            v-on:keyup.enter="handlePressSearchpallet()"
            type="text"
            placeholder="N Pallet"
            class="w-full pr-16 input input-primary input-bordered"
          />
          <button
            @click.prevent="handlePressSearchpallet()"
            class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            :class="loading ? 'loading disabled' : ''"
          >
            {{ loading ? "" : "Buscar" }}
          </button>
        </div>
        <button
          v-if="objpallet.length != 0"
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

    <div v-if="objpallet.length != 0">
      <!-- Infor pallet -->
      <PalletInfo :objpallet="objpallet" />

      <!-- Hist Flujo -->
      <TFlujo :objpallet="objpallet" />
    </div>
  </div>
</template>

<script>
import TFlujo from "@/components/ConsultaPallet/TFlujo";
import PalletInfo from "@/components/ConsultaPallet/PalletInfo";
export default {
  data() {
    return {
      pallet: "",
      objpallet: [],
      loading: false,
    };
  },
  components: { TFlujo, PalletInfo },
  methods: {
    async handlePressSearchpallet() {
      this.loading = true;
      this.objpallet = [];
      let url =
        process.env.VUE_APP_OT_DEPOSITO +
        `/api/PalletItem/GetPallet?id_pallet=${this.pallet}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success == "ok") {
            this.objpallet.push(JSON.parse(data.data));
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
              text: `No se pudo consultar el Pallet ${e.toString()}`,
            },
            2000
          )
        );
      this.pallet = "";
      this.loading = false;
    },
    clear() {
      this.objpallet = [];
      this.pallet = "";
    },
  },
};
</script>

<style>
</style>