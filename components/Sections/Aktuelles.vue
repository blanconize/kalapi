<template>
	<section ref="aktuelles" id="aktuelles" class="bg-white py-24">
		<div class="area">
			<div class="bg-black p-6 inline-flex items-center">
				<SectionHeadline headline="Aktuelles" />
			</div>
			<CardText v-for="(post, index) in news" :post="post" :key="index" :index="index" />
		</div>
	</section>
</template>

<script setup>
	import CardText from "@/components/CardText.vue";
	import SectionHeadline from "../Headlines/SectionHeadline.vue";
	defineProps({
		news: Array
	});
</script>

<style lang="scss" scoped></style>
