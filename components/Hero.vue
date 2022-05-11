<template>
	<section ref="hero" class="bg-black flex items-end justify-start flex-wrap relative">
		<div class="w-full">
			<video
				ref="video"
				id="kalapiHeroVideo"
				autoplay
				loop
				src="video/kalapi-reel-kurz_crf-28_yuv420p.mp4"
				class="w-full"
			></video>
		</div>
		<div class="absolute w-full bottom-0 left-0 bg-gradient-to-t from-black to-black-500">
			<div class="area">
				<div class="pt-8 lg:-mb-8 w-full lg:w-2/3 z-10">
					<HeroHeadline :headline="props.headline" />
				</div>
			</div>
		</div>
		<div
			class="absolute top-full left-0 w-full h-4 bg-contain bg-repeat"
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
