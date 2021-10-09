import { getPokemons } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de números', () => {
        const pokemons = getPokemons()
        /* console.log(pokemons) */
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', () => {

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', () => {
        
    })
})