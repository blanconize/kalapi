<template>
	<section ref="hero" class="bg-black md:h-screen md:max-h-56 lg:max-h-96 flex items-end justify-start">
		<div class="w-full max-w-7xl mx-auto px-4 lg:px-8">
			<div class="pt-8 lg:-mb-8 w-full lg:w-1/2">
				<HeroHeadline :headline="props.headline" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import HeroHeadline from "./Headlines/HeroHeadline.vue";
	const props = defineProps({
		headline: String
	});
</script>

<style lang="scss" scoped></style>
