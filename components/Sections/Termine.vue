<template>
	<section id="termine" class="bg-white pb-24">
		<div class="area">
			<div class="flex items-center gap-12">
				<h2 class="text-4xl sm:text-6xl lg:text-9xl text-black font-bold uppercase">Kalapi Live</h2>
				<div class="bg-black px-6 pt-4 pb-3 inline-flex items-center">
					<h3 class="text-4xl tracking-5 text-white leading-none uppercase">Termine</h3>
				</div>
			</div>
			<div class="py-4 flex justify-end flex-wrap gap-8">
				<Termin v-for="(termin, index) in termine" :termin="termin" :key="index" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import Termin from "@/components/Termin.vue";
	defineProps({
		termine: Array
	});
</script>

<style scoped></style>
