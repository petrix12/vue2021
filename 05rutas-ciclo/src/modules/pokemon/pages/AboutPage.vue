<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName"> Cambiar nombre</button>
</template>

<script>
export default {
    data(){
        return{
            name: 'Rebeca'
        }
    },

    methods: {
        onChangeName(){
            console.log('Se cambiará el nombre')
            this.name = 'Ester'
        }
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        // Buen lugar para realizar peticiones http
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>