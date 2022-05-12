<template>
	<section id="termine" class="bg-white pb-24 overflow-x-clip">
		<div class="area">
			<div class="flex items-center gap-12">
				<h2 class="text-4xl sm:text-6xl lg:text-9xl text-black font-bold uppercase">Kalapi Live</h2>
			</div>
			<div class="py-8 flex justify-end flex-wrap gap-y-12">
				<Termin
					v-show="showTermin(index)"
					v-for="(termin, index) in props.termine"
					:termin="termin"
					:key="index"
				/>
			</div>
			<div v-show="max < props.termine.length" class="flex justify-end">
				<button @click="increment()" class="text-red-500 text-lg font-bold underline">
					mehr Termine laden
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
	import Termin from "@/components/Termin.vue";
	import { ref } from "@nuxtjs/composition-api";

	const max = ref(3);
	const props = defineProps({
		termine: Array
	});

	const showTermin = current => {
		return current < max.value;
	};

	const increment = () => {
		max.value = max.value + 3;
	};
</script>

<style scoped></style>
