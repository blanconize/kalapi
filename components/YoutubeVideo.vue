<template>
	<iframe
		class="w-full h-full transition-all duration-500 delay-300"
		:class="!show ? 'opacity-0 -translate-y-10' : ''"
		:src="src"
		:title="src"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		ref="videoRef"
	></iframe>
</template>

<script setup>
	import { ref, watch } from "@nuxtjs/composition-api";
	import { useIntersectionObserver } from "@vueuse/core";

	const videoRef = ref(null);
	const seen = ref(false);
	const show = ref(false);

	defineProps({
		title: { type: String, required: false },
		src: { type: String, required: true }
	});
	useIntersectionObserver(videoRef, ([{ isIntersecting }], {}) => {
		seen.value = isIntersecting;
	});

	watch(seen, changed => {
		if (changed) {
			show.value = true;
		}
	});
</script>

<style lang="scss" scoped></style>
