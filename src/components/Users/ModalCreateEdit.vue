<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container w-2/5">
          <h3 class="font-bold text-2xl text-center mb-8">
            Alta modificacion usuario
          </h3>
          <form @submit.prevent="updateCreateUser()">
            <div class="p-10 card bg-base-200">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  class="input"
                  v-model="username"
                  required
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Nombre y Apellido</span>
                </label>
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  class="input"
                  v-model="nombre_apellido"
                  required
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  class="input"
                  v-model="email"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="contraseña"
                  class="input"
                  v-model="password"
                  required
                />
              </div>
            </div>

            <div class="modal-footer flex justify-between">
              <slot name="footer">
                <button class="modal-default-button btn btn-success">
                  Grabar
                </button>
                <button
                  class="modal-default-button btn btn-error"
                  @click.prevent="$emit('closeModal')"
                >
                  Cancelar
                </button>
              </slot>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from "axios";
import pkg from "node-forge";
const { pki } = pkg;
import btoa from "btoa";

export default {
  name: "ModalCreateEdit",
  props: { userEdit: String },
  data() {
    return {
      newuser: true,
      username: "",
      nombre_apellido: "",
      email: "",
      password: "",
    };
  },
  async mounted() {
    let usuario;
    if (this.userEdit != "") {
      await fetch(process.env.VUE_APP_OT_LOGISTICA + "/api/Usuario/GetUsuarios")
        .then((res) => res.json())
        .then((data) => {
          usuario = JSON.parse(data.data).filter(
            (u) => u.UserName == this.userEdit
          );
        })
        .catch((e) => console.error(e));

      if (usuario) {
        this.newuser = false;
        this.username = usuario[0].UserName;
        this.nombre_apellido = usuario[0].nombre_apellido;
        this.email = usuario[0].mail;
        this.password = usuario[0].Password;
      }
    }
  },
  methods: {
    async updateCreateUser() {
      let url;

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

      var rsa = pki.publicKeyFromPem(publicKey);
      var encryptedPassword = btoa(rsa.encrypt(this.password));

      const User = {
        userName: this.username,
        nombre_apellido: this.nombre_apellido,
        mail: this.email,
        password: encryptedPassword,
      };

      if (this.newuser) {
        url = process.env.VUE_APP_OT_LOGISTICA + "/api/Usuario/CreateUsuario";
      } else {
        url = process.env.VUE_APP_OT_LOGISTICA + "/api/Usuario/UpdateUsuario";
      }

      await axios
        .post(url, User)
        .then((res) => {
          if (res.data.success == "ok") {
            this.$notify(
              {
                group: "success",
                title: "Success",
                text: `Usuario grabado con exito!`,
              },
              2000
            ); // 2s
            this.$emit("closeModal");
          } else {
            this.$notify(
              {
                group: "error",
                title: "Error",
                text: `No se pudo grabar el usuario ${res.data.errorMessage.toString()}`,
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
              text: `No se pudo grabar el usuario ${e.toString()}`,
            },
            2000
          );
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 250px;
  margin: 0px auto;
  padding: 30px 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 20px;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>