<template>
	<section ref="band" id="band" class="bg-black pb-24 relative">
		<div
			class="absolute bottom-full left-0 w-full h-4 bg-contain bg-repeat rotate-180"
			style="background-image: url('distortion_bottom.svg')"
		></div>
		<div class="area">
			<h2 class="text-4xl sm:text-6xl lg:text-9xl text-white font-bold uppercase lg:translate-y-[-24px] pb-4">
				Die Band
			</h2>
			<p class="text-white text-lg font-opensans pb-12 lg:pl-12 lg:pb-24">{{ band.text }}</p>
		</div>
		<div class="area-xl">
			<div class="grid grid-cols-8 xl:grid-cols-9 gap-6">
				<div class="col-span-8 sm:col-span-4 lg:col-span-2 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_1.png" />
				</div>
				<div class="order-1 col-span-8 lg:col-span-4 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_2.png" />
				</div>
				<div class="col-span-8 sm:col-span-4 lg:col-span-2 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_3.png" />
				</div>
				<div class="hidden xl:block xl:col-span-1"></div>
				<div class="hidden xl:block xl:col-span-1"></div>
				<div class="col-span-8 order-1 sm:col-span-4 lg:col-span-2 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_4.png" />
				</div>
				<div class="col-span-8 order-1 sm:col-span-4 lg:col-span-2 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_5.png" />
				</div>
				<div class="order-1 col-span-8 lg:col-span-4 h-[400px] lg:-order-none">
					<LazyImage type="background" src="band/band_6.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import LazyImage from "../LazyImage.vue";
	defineProps({
		band: Object
	});
</script>

<style lang="scss" scoped></style>
