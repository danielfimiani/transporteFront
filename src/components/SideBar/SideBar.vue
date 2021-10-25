<template>
  <div class="rounded-lg h-full w-auto shadow-lg">
    <input id="drawer" type="checkbox" class="drawer-toggle" checked />
    <div class="drawer-side w-full h-full">
      <label for="drawer" class="drawer-overlay"></label>
      <ul
        class="
          menu
          p-4
          overflow-y-auto
          w-80
          bg-base-100
          text-base-content
          shadow-lg
        "
      >
        <li>
          <div class="collapse rounded collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">Consultas</div>
            <div class="collapse-content">
              <router-link
                :to="{ name: 'Pallet' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p>Consulta de Palets</p>
              </router-link>
              <router-link
                :to="{ name: 'Serie' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p>Consulta de Series</p>
              </router-link>
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <p>Recepcion</p>
              </router-link>
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
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
                <p>Despacho</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="collapse rounded collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">Operaciones</div>
            <div class="collapse-content">
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
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
                <p>Recepcion</p>
              </router-link>
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
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
                <p>Despacho</p>
              </router-link>
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-6"
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
                <p>Conteo</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="collapse rounded collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">Administracion</div>
            <div class="collapse-content">
              <router-link
                :to="{ name: 'Users' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p>Gestion de Usuarios</p>
              </router-link>
              <router-link
                :to="{ name: 'Excel' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p>Locaciones</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="collapse rounded collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">Desarrollo</div>
            <div class="collapse-content">
              <router-link
                :to="{ name: 'Barcode' }"
                class="btn btn-outline btn-accent mt-10 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <p>Codigos de barra</p>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      username: "Usuario",
      toggle: true,
    };
  },
  mounted() {
    this.$router.push("Home");
  },
  methods: {
    LogOut() {
      if (localStorage.getItem("User")) {
        localStorage.removeItem("User");
      }
      this.$router.push({ path: "/" });
    },
  },
};
</script>