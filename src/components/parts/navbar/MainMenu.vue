<template>
	<div class="navbar-nav-wrap-content-left collapse navbar-collapse">
		<div class="navbar-body">
			<ul class="navbar-nav flex-grow-1">
				<li class="" v-for="(item, index) in mainMenus" :key="index">
					<a class="navbar-nav-link nav-link d-flex align-items-center">
						<i :class='`bx bx-${item.icon}`' />
						{{ item.label }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mainMenus } from '../../../lib/statics';
import 'boxicons'

export default {
	data() {
		return {
			mainMenus,
		};
	},
}
</script>

<style>

</style>
