<template>
	<main class="max-w-full">
		<Hero headline="OLD SCHOOL WAR GESTERN" />
		<Aktuelles :news="content.news" />
		<!-- <Termine :termine="content.termine" /> -->
		<Band :band="content.band" />
		<Diskografie :diskografie="content.diskografie" />
		<Kontakt :kontakt="content.kontakt" />
		<Sponsors :sponsors="content.sponsors" />
	</main>
</template>

<script setup>
	import Aktuelles from "@/components/Sections/Aktuelles.vue";
	import Band from "@/components/Sections/Band.vue";
	import Diskografie from "@/components/Sections/Diskografie.vue";
	import Kontakt from "@/components/Sections/Kontakt.vue";
	import Sponsors from "@/components/Sections/Sponsors.vue";
	import Termine from "@/components/Sections/Termine.vue";
	import { useContext, useStatic } from "@nuxtjs/composition-api";
	const { $content } = useContext();

	const content = useStatic(async () => {
		const { news, termine, band, diskografie, kontakt, sponsors } = await $content("index").fetch();
		return { news, termine, band, diskografie, kontakt, sponsors };
	});
</script>
