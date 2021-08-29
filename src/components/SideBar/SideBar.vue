<template>
	<nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
		<!-- SideNavBar -->

		<div class="flex flex-row border-b items-center justify-between pb-2">
			<!-- Hearder -->
			<span class="text-lg font-semibold capitalize dark:text-gray-300">
				my admin
			</span>
		</div>

		<div class="mt-8">
			<!-- User info -->
			<img
				class="h-12 w-12 rounded-full object-cover"
				src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
				alt="enoshima profile" />
			<h2
				class="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
				Hello Enoshima
			</h2>
			<span class="text-sm dark:text-gray-300">
				<span class="font-semibold text-green-600 dark:text-green-300">
					Admin
				</span>
				id789038
			</span>
		</div>

		<button
			class="mt-8 flex items-center justify-between py-3 px-2 text-white
			dark:text-gray-200 bg-green-400 dark:bg-green-500 rounded-lg shadow">
			<!-- Action -->
			<router-link :to="{name: 'Home'}">Home</router-link>>
		</button>

		<ul class="mt-2 text-gray-600">
			<li class="mt-8">
				<i class="fa fa-calendar"></i>
				<router-link :to="{name: 'Calendar'}">Calendar</router-link>>
			</li>

			<li
				class="mt-8 shadow py-2 bg-white dark:bg-gray-200 rounded-lg
				-ml-4">
				<a href="#home" class="flex pl-4">
					<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
						<path
							d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"></path>
					</svg>
					<router-link :to="{name: 'Users'}">Users</router-link>>
				</a>
			</li>

			<li class="mt-8">
				<a href="#home" class="flex">
					<svg
						class="fill-current h-5 w-5 dark:text-gray-300"
						viewBox="0 0 24 24">
						<path
							d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
					</svg>
					<span
						class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
						tasks
					</span>
				</a>
			</li>

			<li class="mt-8" @click.prevent="LogOut()">
				<a href="#home" class="flex">
					<svg
						class="fill-current h-5 w-5 dark:text-gray-300"
						viewBox="0 0 24 24">
						<path
							d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
					</svg>
					<span
						class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">
						Cerrar Sesion
					</span>
				</a>
			</li>
		</ul>

		<div class="mt-auto flex items-center text-red-700 dark:text-red-400">
			<!-- important action -->
		</div>
	</nav>
</template>
<script>
export default {
	name: 'SideBar',
	mounted() {		
		this.$router.push('Home')
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