<template>
	<div class="aspect-w-4 aspect-h-3">
		<img
			class="transition-all duration-500 delay-300"
			:class="!showImage ? 'opacity-0 -translate-y-10' : ''"
			:src="showImage ? src : ''"
			:alt="alt"
			ref="lazyImageRef"
		/>
	</div>
</template>

<script setup>
	import { ref, watch } from "@nuxtjs/composition-api";
	import { useIntersectionObserver } from "@vueuse/core";

	const lazyImageRef = ref(null);
	const seen = ref(false);
	const showImage = ref(false);

	defineProps({
		alt: { type: String, required: false },
		src: { type: String, required: true }
	});
	useIntersectionObserver(lazyImageRef, ([{ isIntersecting }], {}) => {
		seen.value = isIntersecting;
	});

	watch(seen, changed => {
		if (changed) {
			showImage.value = true;
		}
	});
</script>

<style lang="scss" scoped></style>
