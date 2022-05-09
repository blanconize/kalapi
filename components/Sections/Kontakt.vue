<template>
	<section ref="kontakt" id="kontakt" class="pb-24">
		<div class="area">
			<h2 class="text-4xl sm:text-6xl lg:text-9xl text-black font-bold uppercase lg:translate-y-[-24px] pb-4">
				Kontakt
			</h2>
			<div class="grid grid-cols-5 gap-8 md:gap-0 items-center">
				<div class="col-span-5 xs:col-span-3 md:col-span-4">
					<div class="grid grid-cols-3 gap-6 md:gap-0">
						<div v-for="(contact, index) in props.kontakt.contact" class="col-span-3 md:col-span-1">
							<div class="text-xl mb-2 font-bold">{{ contact.label }}</div>
							<div class="font-opensans">
								<a :href="'mailto:' + contact.email">{{ contact.email }}</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-5 xs:col-span-2 md:col-span-1">
					<div class="grid grid-cols-4">
						<div
							v-for="(contact, index) in props.kontakt.profiles"
							class="col-span-1 md:flex md:justify-end"
						>
							<a target="_blank" :href="contact.link">
								<Icon class="h-6 w-6 hover:text-red-500" :name="contact.icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		kontakt: Object
	});
</script>

<style lang="scss" scoped></style>
