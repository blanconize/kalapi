<template>
	<section ref="aktuelles" id="aktuelles" class="bg-white py-24">
		<div class="area">
			<div class="bg-black p-6 inline-flex items-center">
				<SectionHeadline headline="Aktuelles" />
			</div>
			<CardText
				v-show="showNews(index)"
				v-for="(post, index) in props.news"
				:post="post"
				:key="index"
				:index="index"
			/>
			<div v-show="max < props.news.length" class="flex justify-end">
				<button @click="increment()" class="text-red-500 text-lg font-bold underline">
					mehr Aktuelles laden
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
	import CardText from "@/components/CardText.vue";
	import { ref } from "@nuxtjs/composition-api";
	import SectionHeadline from "../Headlines/SectionHeadline.vue";
	const props = defineProps({
		news: Array
	});
	const max = ref(3);
	const showNews = current => {
		return current < max.value;
	};

	const increment = () => {
		max.value = max.value + 3;
	};
</script>

<style lang="scss" scoped></style>
