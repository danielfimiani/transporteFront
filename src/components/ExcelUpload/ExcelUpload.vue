<template>
  <div class="w-full">
    <!-- Form -->
    <div class="shadow m-2 p-8 bg-white rounded-lg flex justify-between">
      <div>
        <h1 class="text-2xl">Importacion de planilla</h1>

        <DropZone
          @drop.prevent="drop"
          @change="
            selectedFile();
            readFile();
          "
        />
      </div>

      <div v-if="dropzoneFile.name && !spinner" class="flex flex-row">
        <span class="file-info text-2xl">{{ dropzoneFile.name }}</span>

        <button
          v-if="!spinner"
          class="btn btn-success ml-3"
          @click="submitFile()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-6 h-6 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          Subir Archivo
        </button>

        <Spinner v-if="this.spinner" class="mt-6" />

        <button
          class="btn btn-error ml-3"
          @click="
            clearDropZone();
            clearTable();
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-6 h-6 mr-2 stroke-current"
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

    <ExcelTable v-if="payload.length != 0" :rows="this.payload" class="m-2" />
  </div>
</template>

<script>
import readXlsxFile from "read-excel-file";
import DropZone from "@/components/ExcelUpload/DropZone";
import Spinner from "@/components/Spinner.vue";
import ExcelTable from "@/components/ExcelUpload/ExcelTable";
import { ref } from "vue";
import axios from "axios";

export default {
  components: { DropZone, Spinner, ExcelTable },
  data() {
    return {
      spinner: false,
      payload: [],
    };
  },
  setup() {
    let dropzoneFile = ref("");
    let freshvalue = dropzoneFile.value;

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      console.log(document.querySelector(".dropzoneFile").files);
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    const clearDropZone = () => {
      dropzoneFile.value = freshvalue;
    };

    return { dropzoneFile, drop, selectedFile, clearDropZone };
  },
  methods: {
    readFile() {
      this.spinner = true;

      const input = document.querySelector(".dropzoneFile");

      //Leo el archivo
      readXlsxFile(input.files[0]).then((rows) => {
        for (let i = 1; i < rows.length; i++) {
          let row = {
            embarque: rows[i][0].toString(),
            contenedor: rows[i][1],
            pallet: rows[i][2],
            codigo: rows[i][3],
            descripcion: rows[i][4],
            cantidad: rows[i][5],
            peso: rows[i][6],
            volumen: rows[i][7],
            origen: rows[i][8],
            factura: rows[i][9],
            estimado: new Date(rows[i][10]),
            arribo: new Date(rows[i][11]),
            observacion: rows[i][12],
          };

          this.payload.push(row);
        }
      });

      this.spinner = false;
    },
    async submitFile() {
      this.spinner = true;
      let url = process.env.VUE_APP_OT_DEPOSITO + "/api/ImportacionExcel/ImportarExcel";
      await axios
        .post(url, this.payload)
        .then((res) => {
          if (res.data.success == "ok") {
            this.$notify(
              {
                group: "success",
                title: "Success",
                text: "Archivo Importado con exito!",
              },
              2000
            ); // 2s
            this.clearTable();
            this.clearDropZone();
          } else {
            this.$notify(
              {
                group: "error",
                title: "Error",
                text: `No se pudo importar el archivo | ${res.data.errorMessage.toString()}`,
              },
              2000
            );
          }
        })
        .catch((e) => {
          this.$notify(
            {
              group: "error",
              title: "Error",
              text: `No se pudo importar el archivo ${e.toString()}`,
            },
            2000
          );
        });
      this.spinner = false;
    },
    clearTable() {
      this.payload = [];
    },
  },
};
</script>
