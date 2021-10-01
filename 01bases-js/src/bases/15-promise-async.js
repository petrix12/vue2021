import { getHeroById } from './bases/11-imp-exp3'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        // la siguiente instrucción se ejecutará 1 seg después
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero){
                resolve(hero)
            }else{
                reject('El héroe no existe')
            }
            
        })
    })
}

getHeroByIdAsync(5)
    .then(h => {
        console.log(`El héroe es: ${ h.name }`)
    })
    .catch(console.log)