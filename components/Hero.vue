<template>
	<section
		ref="hero"
		class="bg-black md:h-screen md:max-h-56 lg:max-h-96 flex items-end justify-start flex-wrap relative"
	>
		<div class="area">
			<div class="pt-8 lg:-mb-8 w-full lg:w-1/2">
				<HeroHeadline :headline="props.headline" />
			</div>
		</div>
		<div
			class="absolute top-full left-0 w-full h-3 bg-contain bg-repeat"
			style="background-image: url('distortion_bottom.svg')"
		></div>
	</section>
</template>

<script setup>
	import HeroHeadline from "./Headlines/HeroHeadline.vue";
	const props = defineProps({
		headline: String
	});
</script>

<style lang="scss" scoped></style>
