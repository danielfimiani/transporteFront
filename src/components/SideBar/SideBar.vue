<template>

<div class="h-full shadow-2xl">
	<nav class="flex flex-col bg-gray-200 px-6 h-full justify-center">	
		<router-link :to="{name: 'Home'}" class="btn btn-outline btn-accent mt-10 flex">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			</svg>
			<p>Inicio</p>
		</router-link>
		
		<router-link :to="{name: 'Calendar'}" class="btn btn-outline btn-accent mt-10">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
			</svg>
			<p>Calendar</p>
		</router-link>
		
		<router-link :to="{name: 'Users'}" class="btn btn-outline btn-accent mt-10">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg>
			<p >
				Usuarios
			</p>
		</router-link>

		<div class="collapse border rounded-box border-gray-900 collapse-arrow mt-10">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-medium">
				Operaciones
			</div> 
			<div class="collapse-content"> 
				<router-link :to="{name: 'Excel'}" class="btn btn-outline btn-accent mt-10 w-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
					</svg>
					<p >
						Subida excel de recepcion
					</p>
				</router-link>	
			</div>
		</div> 
	</nav>
</div>

</template>
<script>
	export default {
		name: 'SideBar',
		data() {
			return {
				username: 'Usuario'
			}
		},
		mounted() {		
			let user = localStorage.getItem('User')
			if (user){
				this.username = user.nombre;
				this.$router.push('Home')	
			}
		},
		methods: {
			LogOut(){
				if (localStorage.getItem('User')){
					localStorage.removeItem('User')
				}
				this.$router.push({path: '/'})
			}
		}
	}
</script>