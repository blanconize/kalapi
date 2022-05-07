<template>
	<main class="pt-20 lg:pt-48">
		<Hero headline="OLD SCHOOL WAR GESTERN" />
		<Aktuelles :news="content.news" />
		<Termine :termine="content.termine" />
	</main>
</template>

<script setup>
	import Aktuelles from "@/components/Sections/Aktuelles.vue";
	import Termine from "@/components/Sections/Termine.vue";
	import { useContext, useStatic } from "@nuxtjs/composition-api";
	const { $content } = useContext();

	const content = useStatic(async () => {
		const { news, termine } = await $content("index").fetch();
		return { news, termine };
	});
</script>
