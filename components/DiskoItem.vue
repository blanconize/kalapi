<template>
	<div class="pb-14 relative">
		<div class="mb-4">
			<LazyImage type="img" :src="data.cover" :alt="data.title" />
		</div>
		<div class="text-black font-bold text-lg mb-2">
			{{ data.title }}
		</div>
		<div class="font-opensans text-sm mb-1">
			{{ data.release }}
		</div>
		<div class="font-opensans mb-2">
			{{ data.text }}
		</div>
		<div class="flex gap-4 items-center h-12 absolute bottom-0 left-0">
			<a
				v-if="data.shoplink"
				:href="data.shoplink"
				target="_blank"
				class="px-4 py-2 font-bold text-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
				>Zum Shop</a
			>
			<div class="px-4 py-2 bg-black text-white font-bold text-lg" v-else>Vergriffen</div>
			<a v-if="data.spotify" :href="data.spotify" target="_blank">
				<div class="sr-only">{{ data.spotify }}</div>
				<Icon class="h-8 w-8 hover:text-red-500 transition-all" name="spotify" />
			</a>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		data: Object
	});
</script>
