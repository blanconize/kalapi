<template>
	<section ref="sponsors" id="sponsors" class="bg-black py-12 relative">
		<div class="area">
			<div class="grid grid-cols-4 gap-12">
				<div class="col-span-2 lg:col-span-1" v-for="(sponsor, index) in sponsors">
					<a :href="sponsor.link" target="_blank">
						<div class="sr-only">{{ sponsor.link }}</div>
						<LazyImage type="img" :src="sponsor.imgUrl" :alt="sponsor.link" />
					</a>
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
	import LazyImage from "../LazyImage.vue";
	defineProps({
		sponsors: Array
	});
</script>

<style lang="scss" scoped></style>
