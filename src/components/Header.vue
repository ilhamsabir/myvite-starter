<template>
	<div>
		<header class="navbar navbar-expand-xl navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered default">
			<div class="container">
				<div class=" js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
					<NavbarBrand />
					<NavbarSideMenu />
					<NavbarMainMenu />
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import NavbarBrand from '@/components/parts/navbar/Brand.vue'
import NavbarSideMenu from '@/components/parts/navbar/SideMenu.vue'
import NavbarMainMenu from '@/components/parts/navbar/MainMenu.vue'
export default {
	components: {
		NavbarBrand,
		NavbarSideMenu,
		NavbarMainMenu
	}
}
</script>

<style>

</style>
