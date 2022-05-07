<template>
	<div
		class="text-white bg-black p-8 w-full lg:w-10/12 flex flex-wrap md:flex-nowrap gap-8 items-center justify-between transition-all duration-500"
		ref="terminRef"
		:class="!show ? 'opacity-0 translate-x-52' : ''"
	>
		<div class="text-4xl w-full md:w-auto">{{ termin.date }}</div>
		<div class="text-4xl w-full sm:w-2/3">{{ termin.title }}</div>
		<div
			class="px-4 py-2 text-xl text-white border-white border-2 hover:bg-white hover:text-black transition-colors uppercase content-end"
		>
			<a :href="termin.link" target="_blank">Tickets</a>
		</div>
	</div>
</template>

<script setup>
	import { useIntersectionObserver } from "@vueuse/core";
	import { ref, watch } from "vue-demi";
	const show = ref(false);
	const seen = ref(false);

	const terminRef = ref(null);
	defineProps({
		termin: {
			date: String,
			title: String,
			link: String
		}
	});

	useIntersectionObserver(terminRef, ([{ isIntersecting }], {}) => {
		seen.value = isIntersecting;
	});

	watch(seen, changed => {
		if (changed) {
			show.value = true;
		}
	});
</script>

<style lang="scss" scoped></style>
