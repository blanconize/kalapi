<template>
	<div class="flex items-center transition-colors" v-html="iconSvg(props.name)"></div>
</template>

<script setup>
	const props = defineProps({
		name: String
	});

	const iconSvg = src => {
		return require(`assets/svg/icons/icon-${src}.svg?raw`);
	};
</script>

<style lang="scss" scoped></style>
