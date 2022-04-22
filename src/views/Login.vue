<template>
  <div class="bg-white flex justify-center items-center min-h-screen">
    <!-- Login Section -->
    <div class="flex flex-col w-2/5">
      <div class="mt-12 ml-12 top-0 left-0 absolute">
        <a href="#" class="font-bold text-xl p-4">OURENSE TRANSPORTE</a>
      </div>

      <div class="flex flex-col justify-center my-auto pt-8 px-8">
        <p class="text-center text-3xl">Bienvenido.</p>
        <form class="flex flex-col pt-3 w-full" @submit.prevent="Login">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Usuario</span>
            </label>
            <input
              v-model="username"
              type="text"
              placeholder=""
              class="input input-lg input-bordered"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Contraseña</span>
            </label>
            <input
              v-model="password"
              type="password"
              placeholder=""
              class="input input-lg input-bordered"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesion"
            class="btn btn-lg mt-4"
            v-if="!spiner"
          />

          <Spinner v-if="spiner" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";
import pkg from 'node-forge';
const { pki } = pkg;
import { JSEncrypt } from 'jsencrypt'  
import btoa from "btoa";

export default {
  name: "Login",
  components: {
    Spinner,
  },
  data() {
    return {
      spiner: false,
      username: "",
      password: "",
    };
  },
  mounted() {
    if (localStorage.getItem("User")) {
      this.$router.push({ path: "/MainLayout" });
    }
  },
  methods: {
    async Login() {
      this.spiner = !this.spiner;
      let url =
        process.env.VUE_APP_OT_LOGISTICA + "/api/Login/AuthenticateUserFront";

      const publicKey = `-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwlG/yuC748z8uf9lvjt5
        rlF/9xi/bdHQ3EXOyIQU30HgkFz+xYjehVBVy6RvPV6UM+AxbTVUWHUmraY6hmsJ
        /oeAlO6ukDXTT8v30BsLZ0PpN95DfI67cCUbc0R2xrusRMc7EaGArehMHRKP3Bho
        enS7LfTRdtZfc4vbq4Vj5RyXDolfW2d1HVG635sIFY+VdjIdlldxI6EOG3Lx+PvT
        x5U/jH0R38PqzSnXC5qCwz0FzBP5X8yMowQDQB67Cm0JP1ffJ4rhdXBmGOQXCa8C
        KXlTTUJrBLJtR04BkU/r7wP+C+DCuvUgNlkRNrJCugcCA1mJvIPD4CCxDT3H7wzX
        VwIDAQAB
        -----END PUBLIC KEY-----
        `;

      let encrypt = new JSEncrypt()
      encrypt.setPublicKey(publicKey)
      var rsa = pki.publicKeyFromPem(publicKey);
      console.log('RSA :' + rsa.encrypt(this.password));
      console.log('JSENcrypt : ' + encrypt.encrypt(this.password));
      var encryptedPassword = btoa(rsa.encrypt(this.password));


      let credentials = {
        userName: this.username,
        password: encryptedPassword,
      };

      await axios
        .post(url, credentials, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => {
          if (res.data.success == "ok") {
            let user = {
              nombre: this.username,
              expiricy: Date.now() + 7,
            };

            localStorage.setItem("User", JSON.stringify(user));
            this.$router.push({ path: "/MainLayout" });
            this.$notify(
              {
                group: "success",
                title: "Success",
                text: `Bienvenido ${user.nombre.toUpperCase()}`,
              },
              2000
            ); // 2s
          } else {
            this.$notify(
              {
                group: "error",
                title: "Error",
                text: res.data.errorMessage,
              },
              2000
            );
          }
          this.spiner = !this.spiner;
        })
        .catch((e) => {
          console.log(e);
          this.spiner = !this.spiner;
          this.$notify(
            {
              group: "error",
              title: "Error",
              text: "No se pudo inicar sesion, intente de nuevo más tarde.",
            },
            2000
          ); // 2s
        });
    },
  },
};
</script>
