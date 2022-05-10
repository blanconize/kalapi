<template>
	<h1 class="text-6xl lg:text-9xl text-white text-bold">
		{{ props.headline }}
	</h1>
</template>

<script setup>
	const props = defineProps({
		headline: String
	});
</script>

<style lang="scss" scoped></style>
