<template>
	<div class="flex items-center transition-colors kalapi-icon" v-html="iconSvg(props.name)"></div>
</template>

<script setup>
	const props = defineProps({
		name: String
	});

	const iconSvg = src => {
		return require(`assets/svg/icons/icon-${src}.svg?raw`);
	};
</script>

<style scoped>
	.kalapi-icon > svg {
	}
</style>
