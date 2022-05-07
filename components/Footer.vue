<template>
	<footer>
		<div class="bg-white py-8">
			<div class="area">
				<div class="flex justify-start md:justify-between flex-wrap py-2">
					<div class="flex w-full justify-between md:justify-start md:w-auto flex-wrap">
						<div class="text-lg md:mr-36">&copy; KALAPI GBR {{ date }}</div>
						<div class="flex flex-wrap md:flex-nowrap md:space-x-24">
							<div
								class="w-full text-center md:text-left md:w-auto text-lg uppercase"
								v-for="nav in navigation"
							>
								<a :href="nav.ref" target="_blank">{{ nav.label }}</a>
							</div>
						</div>
					</div>
					<div class="text-lg py-4 md:py-0 uppercase w-full md:w-auto">
						<a href="https://www.weareindeed.com/" target="_blank"
							>WEBSITE: <span class="text-red-500 underline"> WEAREINDEED</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const navigation = [
		{
			label: "Impressum und Datenschutz",
			ref: "https://shop.kalapi.de/kontakt/impressum"
		}
	];
	const date = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
