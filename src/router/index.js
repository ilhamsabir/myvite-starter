import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: async function() {
				return `Epicery ~ Dashboard`
			}
		},
		component: Home
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
