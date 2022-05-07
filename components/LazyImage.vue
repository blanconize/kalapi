<template>
	<div class="h-full w-full">
		<div v-if="type === 'img'">
			<img
				class="transition-all duration-500 delay-300 w-full h-auto"
				:class="!showImage ? 'opacity-0 aspect-w-16 aspect-h-9' : ''"
				:src="showImage ? src : ''"
				:alt="alt"
				ref="lazyImageRef"
			/>
		</div>
		<div
			v-if="type === 'background'"
			class="h-full w-full bg-cover bg-no-repeat transition-all duration-500 delay-300 bg-center"
			:class="!showImage ? 'opacity-0 -translate-y-10' : ''"
			:style="showImage ? `background-image:url(${src})` : ''"
			ref="lazyImageRef"
		></div>
	</div>
</template>

<script setup>
	import { ref, watch } from "@nuxtjs/composition-api";
	import { useIntersectionObserver } from "@vueuse/core";

	const lazyImageRef = ref(null);
	const seen = ref(false);
	const showImage = ref(false);

	defineProps({
		alt: String,
		src: String,
		type: String
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
