<template>
	<div class="content container-fluid">
		<PageHeader title="Dashboard" />

		<div class="row justify-content-sm-center text-center py-10">
			<div class="col-sm-7 col-md-5">
				<img class="img-fluid mb-5" src="https://htmlstream.com/front-dashboard/assets/svg/illustrations/graphs.svg" alt="Image Description" />
				<h1>Hello, nice to see you!</h1>
				<p>You are now minutes away from creativity than ever before. Enjoy!</p>
				<a class="btn btn-primary" href="index.html">Create my first campaign</a>
			</div>
		</div>
	</div>
</template>

<script>
import PageHeader from '@/components/parts/PageHeader.vue'
export default {
	components: {
		PageHeader,
	},
}
</script>

<style>

</style>
