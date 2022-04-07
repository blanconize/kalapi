<template>
	<footer>
		<div class="bg-white py-8">
			<div class="area">
				<div class="flex justify-start md:justify-between flex-wrap py-2">
					<div class="flex w-full justify-between md:justify-start md:w-auto flex-wrap">
						<div class="text-lg md:mr-36">&copy; KALAPI GBR 2022</div>
						<div class="flex flex-wrap md:flex-nowrap md:space-x-24">
							<div class="w-full text-center md:text-left md:w-auto text-lg uppercase">
								<nuxt-link to="/impressum">IMPRESSUM</nuxt-link>
							</div>
							<div class="w-full md:w-auto text-center md:text-left text-lg uppercase">
								<nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
							</div>
						</div>
					</div>
					<div class="text-lg py-4 md:py-0 uppercase w-full md:w-auto">
						<a hrref="https://www.weareindeed.com/" target="_blank"
							>WEBSITE: <span class="text-red-500 underline"> WEAREINDEED</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
