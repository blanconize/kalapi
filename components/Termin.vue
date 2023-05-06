<template>
	<div
		class="text-white bg-cover bg-no-repeat w-full lg:w-10/12 transition-all duration-500 relative"
		ref="terminRef"
		:class="!show ? 'opacity-0 translate-y-12' : ''"
	>
		<div
			class="absolute top-full left-0 w-full h-4 bg-contain bg-repeat"
			style="background-image: url('distortion_bottom.svg')"
		></div>
		<div
			class="absolute bottom-full left-0 w-full h-4 bg-contain bg-repeat rotate-180"
			style="background-image: url('distortion_bottom.svg')"
		></div>
		<div
			class="bg-black p-8 flex flex-wrap md:flex-nowrap gap-8 items-center justify-between rounded-tl-sm rounded-bl-sm"
		>
			<div class="text-4xl w-full md:w-1/3 font-bold" v-html="termin.date"></div>
			<div class="text-4xl w-full sm:w-2/3 font-bold">{{ termin.title }}</div>
			<div
				class="px-4 py-2 text-white border-white border-2 hover:bg-white hover:text-black transition-colors uppercase content-end font-bold"
			>
				<a :href="termin.link" target="_blank">Tickets</a>
			</div>
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
