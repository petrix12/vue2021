<template>
    <h2>Contador</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
</template>

<script>
export default {
    data(){
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue(){
            console.log('getSquareValue')
            return this.counter * this.counter
        }
    },
    computed: {
        squareCounter(){
            console.log('squareCounter')
            return this.counter * this.counter
        }
    }
}
</script>

<style>

</style>