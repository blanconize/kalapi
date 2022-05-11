<template>
	<header ref="navbar">
		<div class="relative bg-black h-20 lg:h-48">
			<div class="area">
				<div class="flex justify-between items-center py-4 lg:pt-12 lg:justify-start md:space-x-10">
					<div class="flex justify-start lg:w-0 lg:flex-1 relative h-12">
						<nuxt-link to="/">
							<span class="sr-only">Workflow</span>
							<div class="lg:absolute lg:-top-8 lg:left-0">
								<nuxt-img class="h-12 w-auto lg:h-40 transition-all" src="logo.svg" />
							</div>
						</nuxt-link>
					</div>
					<div class="-mr-2 -my-2 lg:hidden">
						<button
							type="button"
							class="rounded-md p-2 inline-flex items-center justify-center text-gray-400"
							aria-expanded="false"
							@click="toggleMobile()"
						>
							<span class="sr-only">Open menu</span>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<nav class="hidden lg:flex space-x-10">
						<a
							v-for="nav in navigation"
							:href="nav.ref"
							class="font-bold text-white uppercase px-4 py-2 hover:bg-white hover:text-black leading-none text-lg transition-colors flex items-center"
						>
							{{ nav.label }}
						</a>

						<a
							target="_blank"
							class="px-4 py-2 text-xl text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-white font-bold transition-colors"
							:href="shopLink.ref"
							>Shop</a
						>
					</nav>
				</div>
			</div>
			<transition name="fade-slide">
				<div
					class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
					v-if="showMobile"
				>
					<div
						class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50"
					>
						<div class="pt-5 pb-6 px-5">
							<div class="flex items-center justify-between">
								<div>
									<img class="h-12 w-auto" src="logo.svg" alt="Kalapi" />
								</div>
								<div class="-mr-2">
									<button
										type="button"
										@click="toggleMobile()"
										class="rounded-md p-2 inline-flex items-center justify-center text-white"
									>
										<span class="sr-only">Close menu</span>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class="mt-10">
								<nav class="space-y-6">
									<div class="flex justify-center" v-for="nav in navigation">
										<a
											:href="nav.ref"
											@click="toggleMobile()"
											class="font-bold text-white uppercase px-4 py-2 hover:bg-white hover:text-black leading-none text-xl transition-colors inline-flex items-center"
										>
											{{ nav.label }}
										</a>
									</div>
									<div class="flex justify-center">
										<a
											target="_blank"
											class="px-4 py-2 text-xl text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-white font-bold"
											:href="shopLink.ref"
											>Shop</a
										>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</header>
</template>

<script setup>
	import { reactive, ref } from "@nuxtjs/composition-api";
	import { onClickOutside } from "@vueuse/core";

	const navbar = ref(null);

	const showMobile = ref(false);
	const navigation = reactive([
		{
			label: "Aktuelles",
			ref: "#aktuelles"
		},
		{
			label: "Termine",
			ref: "#termine"
		},
		{
			label: "Band",
			ref: "#band"
		},
		{
			label: "Diskografie",
			ref: "#diskografie"
		},
		{
			label: "Kontakt",
			ref: "#kontakt"
		}
	]);

	const shopLink = {
		label: "Shop",
		ref: "https://shop.kalapi.de/",
		external: true
	};

	const toggleMobile = () => {
		showMobile.value = !showMobile.value;
	};

	onClickOutside(navbar, () => {
		showMobile.value = false;
	});
</script>
