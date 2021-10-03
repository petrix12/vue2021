<template>
    <h2>Contador</h2>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
</template>

<script>
export default {
    data(){
        return {
            counter: 5
        }
    }
}
</script>

<style>

</style>