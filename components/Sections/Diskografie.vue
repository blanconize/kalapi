<template>
	<section ref="aktuelles" id="aktuelles" class="bg-white py-24">
		<div class="area">
			<div class="bg-black p-6 inline-flex items-center mb-12">
				<SectionHeadline headline="Diskografie" />
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<DiskoItem v-for="(item, index) in diskografie" :data="item" :key="index" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import SectionHeadline from "../Headlines/SectionHeadline.vue";
	import DiskoItem from "./DiskoItem.vue";
	defineProps({
		diskografie: Array
	});
</script>

<style lang="scss" scoped></style>
