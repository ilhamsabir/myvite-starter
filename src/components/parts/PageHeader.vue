<template>
	<div class="page-header mb-0 pb-3">
		<div class="row align-items-center">
			<div class="col-sm mb-1 mb-sm-0">
				<h1 class="page-header-title text-muted">{{title}}</h1>
			</div>

			<div class="col-sm-auto">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
	},
}
</script>

<style>

</style>
