<template>
	<main class="pt-20 lg:pt-48 max-w-full overflow-x-hidden">
		<Hero headline="OLD SCHOOL WAR GESTERN" />
		<Aktuelles :news="content.news" />
		<Termine :termine="content.termine" />
		<Band :band="content.band" />
		<Diskografie :diskografie="content.diskografie" />
	</main>
</template>

<script setup>
	import Aktuelles from "@/components/Sections/Aktuelles.vue";
	import Band from "@/components/Sections/Band.vue";
	import Diskografie from "@/components/Sections/Diskografie.vue";
	import Termine from "@/components/Sections/Termine.vue";
	import { useContext, useStatic } from "@nuxtjs/composition-api";
	const { $content } = useContext();

	const content = useStatic(async () => {
		const { news, termine, band, diskografie } = await $content("index").fetch();
		return { news, termine, band, diskografie };
	});
</script>
