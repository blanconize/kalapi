<template>
	<section ref="aktuelles" class="bg-white py-24">
		<div class="area">
			<div class="bg-black p-6 inline-flex items-center">
				<SectionHeadline headline="Aktuelles" />
			</div>
			<CardText v-for="(post, index) in news.posts" :post="post" :key="index" :index="index" />
		</div>
	</section>
</template>

<script setup>
	import { useContext, useStatic } from "@nuxtjs/composition-api";
	import CardText from "../CardText.vue";
	import SectionHeadline from "../Headlines/SectionHeadline.vue";
	const { $content } = useContext();
	const news = useStatic(async () => {
		const { posts } = await $content("news").fetch();
		return { posts };
	});
</script>

<style lang="scss" scoped></style>
