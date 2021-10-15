const isAuthenticatedGuard = async(to, from, next) => {
    /* console.log({to, from, next}, 'Bloqueado') */

    return new Promise(() => {
		const random = Math.random() * 100
		if(random > 50){
			console.log(random, 'Autenticado - Puede acceder XYZ')
			next()
		} else {
			console.log(random, 'bloqueado por el beforeEach Guard - No puede acceder XYZ')
			next({ name: 'pokemon-home'})
		}        
    })
}

export default isAuthenticatedGuard