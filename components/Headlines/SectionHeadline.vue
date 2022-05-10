<template>
	<h2 class="-mb-2 lg:-mb-3 text-4xl lg:text-6xl tracking-5 text-white leading-none uppercase">
		{{ props.headline }}
	</h2>
</template>

<script setup>
	const props = defineProps({
		headline: String
	});
</script>

<style lang="scss" scoped></style>
