import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      	path: '/', 
		component: import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')  
	},
    {
      	path: '/about', 
		component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
	},
    {
      	path: '/:id',
		name: 'pokemon-id',
		component: import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
		props: (route) => {
			/* console.log(route) */
			/* const { id } = route.params */
			const id = Number(route.params.id)
			return isNaN(id) ? { id:1 } : { id }
			/* return {
				
				id: Number(id)
				//id: 100,
				//nombre: 'Coco',
				//apellido: 'Bazó'
			} */
		}
	},
    {
      	path: '/:pathMatch(.*)*', 
		component: import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound') 
	},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router