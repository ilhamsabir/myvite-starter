<template>
	<div>
		<Header />
		<main class="main pointer-event">
			<Dashboard />
			<Footer />
		</main>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Dashboard from '@/components/Dashboard.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'HomePage',
	title: 'Epicery ~ Home',
	components: {
		Header,
		Dashboard,
		Footer,
	},
	created() {},
	methods: {},
};
</script>

