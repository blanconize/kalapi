<template>
	<section ref="hero" class="bg-black h-screen max-h-96 flex items-end justify-start">
		<div class="w-full max-w-7xl mx-auto px-4 lg:px-8">
			<div class="pt-8 lg:-mb-8 w-full lg:w-1/2">
				<h1 class="text-4xl sm:text-6xl lg:text-9xl text-white text-bold">
					{{ props.headline }}
				</h1>
			</div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		headline: String
	});
</script>

<style lang="scss" scoped></style>
