<template>
	<div v-bind="{ ...props }" class="flex items-center transition-colors" v-html="iconSvg(name)"></div>
</template>

<script setup>
	const { name, ...props } = defineProps({
		name: String
	});

	const iconSvg = src => {
		return require(`assets/svg/icons/icon-${src}.svg?raw`);
	};
</script>

<style lang="scss" scoped></style>
