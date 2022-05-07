<template>
	<div
		class="py-6 sm:p-4 md:py-10 transition-all duration-300 delay-300"
		ref="textRef"
		:class="!show ? `opacity-0 ${left ? 'translate-x-10' : '-translate-x-10'}` : ''"
	>
		<div class="text-xl">{{ content.overline }}</div>
		<div class="text-4xl">{{ content.headline }}</div>
		<div class="text-sm font-opensans">
			{{ content.text }}
		</div>
	</div>
</template>

<script setup>
	import { ref, watch } from "@nuxtjs/composition-api";
	import { useIntersectionObserver } from "@vueuse/core";
	defineProps({
		content: Object,
		left: Boolean
	});

	const textRef = ref(null);
	const seen = ref(false);
	const show = ref(false);

	useIntersectionObserver(textRef, ([{ isIntersecting }], {}) => {
		seen.value = isIntersecting;
	});

	watch(seen, changed => {
		if (changed) {
			show.value = true;
		}
	});
</script>

<style lang="scss" scoped></style>
