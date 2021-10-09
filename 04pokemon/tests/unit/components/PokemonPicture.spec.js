import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {
    test('debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {

    })
    
    test('debe de mostrar el pokemon si showPokemon:true', () => {

    })
})