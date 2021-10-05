<template>
    <!-- <h2>{{ title || 'Contador' }}</h2> -->
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <!-- <p>{{ counter }}</p> -->
    <p data-testid="counter">{{ counter }}</p>
    <div class="buttons-container">
        <!-- <button v-on:click="increase">+1</button>
        <button v-on:click="decrease">-1</button> -->
        <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    /* props: ['title', 'start'], */
    props: {
        title: String, 
        start: {
            type: Number,
            // required: true
            default: 100,
            validator1(value){
                return value >= 0
            }
        }
    },
    data(){
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue(){
            return this.counter * this.counter
        },
        increase(){
            this.counter++
        },
        decrease(){
            this.counter--
        }
    },
    computed: {
        squareCounter(){
            return this.counter * this.counter
        },
        customTitle(){
            /* console.log(this.title)
            return this.title */
            return this.title || 'Contador'
        }
    }
}
</script>

<style>
button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>