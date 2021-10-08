<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <pokemon-picture
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon"
        ></pokemon-picture>
        <PokemonOptions
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
	components: {
		PokemonPicture,
        PokemonOptions
	},
    data(){
        return {
           pokemonArr: [],
           pokemon: null,
           showPokemon: false
        } 
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            /* console.log(this.pokemonArr) */
            const rndInt = Math.floor(Math.random()*4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(pokemonId){
            /* console.log('Llamado Pokemon Page', pokemonId) */
            this.showPokemon = true
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>