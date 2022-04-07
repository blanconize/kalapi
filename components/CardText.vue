<template>
	<div class="py-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div v-if="post.type == 'img'">
				<nuxt-img loading="lazy" :src="post.imageUrl" />
			</div>
			<div class="aspect-w-16 aspect-h-9" v-if="post.type == 'video'">
				<iframe
					class="w-full h-full"
					:src="post.videoUrl"
					:title="post.title"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div
				class="py-6 sm:p-4 md:py-8"
				:class="index % 2 == 0 ? 'order-first md:pr-10 md:pl-0' : 'order-last md:pl-10 md:pr-0'"
			>
				<div class="text-xl">{{ post.content.overline }}</div>
				<div class="text-4xl">{{ post.content.headline }}</div>
				<div class="text-sm font-opensans">
					{{ post.content.text }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		index: {
			type: Number,
			required: true
		},
		post: {
			type: Object,
			required: true,
			videoUrl: {
				type: String,
				required: false
			},
			imageUrl: { type: String, required: false },
			content: {
				headline: { type: String, required: true },
				overline: { type: String, required: true },
				text: { type: String, required: true }
			}
		}
	});
</script>

<style lang="scss" scoped></style>
