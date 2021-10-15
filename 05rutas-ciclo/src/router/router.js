import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/pokemon'
	},

	// Pokémon
	{
		path: '/pokemon',
		name: 'pokemon',
		component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
		children: [
    		{
    		  	path: 'home',
				name: 'pokemon-home',
				component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')  
			},
    		{
    		  	path: 'about', 
				name: 'pokemon-about',
				component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
			},
    		{
    		  	path: 'pokemonid/:id',
				name: 'pokemon-id',
				component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
				props: (route) => {
					const id = Number(route.params.id)
				return isNaN(id) ? { id:1 } : { id }
				}
			},
			{
				path: '',
				redirect: { name: 'pokemon-about' }
			},
		]
	},
	
	// Dragon Ball Z
	{
		path: '/dbz',
		name: 'dbz',
		component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
		children: [
    		{
    		  	path: 'characters',
				name: 'dbz-characters',
				component: () => import(/* webpackChunkName: "Characters" */ '@/modules/dbz/pages/Characters')
			},
    		{
    		  	path: 'about', 
				name: 'dbz-about',
				component: () => import(/* webpackChunkName: "About" */ '@/modules/dbz/pages/About') 
			},
		]
	},
    {
      	path: '/:pathMatch(.*)*', 
		component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
	},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Guard Global - Sincrono
router.beforeEach((to, from, next) => {
	console.log({to, from, next})

	const random = Math.random() * 100
	if(random > 50){
		console.log(random, 'autenticado')
		next()
	} else {
		console.log(random, 'bloqueado por el beforeEach Guard')
		next({ name: 'pokemon-home'})
	}
})

export default router