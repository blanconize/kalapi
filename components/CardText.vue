<template>
	<div class="py-8">
		<div class="grid grid-cols-8 gap-4">
			<div class="col-span-full lg:col-span-5">
				<div v-if="post.type == 'img'">
					<LazyImage :src="post.imageUrl" :alt="post.title" />
				</div>
				<div class="aspect-w-16 aspect-h-9" v-if="post.type == 'video'">
					<YoutubeVideo :src="post.videoUrl" :title="post.title" />
				</div>
			</div>
			<div
				class="col-span-full lg:col-span-3"
				:class="index % 2 == 0 ? 'lg:order-first md:pr-10 md:pl-0' : 'lg:order-last md:pl-10 md:pr-0'"
			>
				<div class="py-6 sm:p-4 md:py-10">
					<div class="text-xl">{{ post.content.overline }}</div>
					<div class="text-4xl">{{ post.content.headline }}</div>
					<div class="text-sm font-opensans">
						{{ post.content.text }}
					</div>
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
