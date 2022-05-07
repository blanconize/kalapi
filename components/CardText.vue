<template>
	<div class="py-8">
		<div class="grid grid-cols-8 gap-4">
			<div class="col-span-full lg:col-span-5">
				<div v-if="post.type == 'img'">
					<LazyImage type="img" :src="post.imageUrl" :alt="post.title" />
				</div>
				<div class="aspect-w-16 aspect-h-9" v-if="post.type == 'video'">
					<YoutubeVideo :src="post.videoUrl" :title="post.title" />
				</div>
			</div>
			<div
				class="col-span-full lg:col-span-3"
				:class="index % 2 == 0 ? 'lg:order-first md:pr-10 md:pl-0' : 'lg:order-last md:pl-10 md:pr-0'"
			>
				<TextBlock :content="post.content" :left="left" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
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

	const left = props.index % 2 === 0;
</script>

<style lang="scss" scoped></style>
