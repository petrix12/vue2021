// console.log(Vue)
const app = Vue.createApp({
    /* template: `
        <h1>Hola Leticia</h1>
        <p>{{ 1 + 1 }}</p>
    ` */

    data(){
        return{
            message: 'Hola Isabel',
            quote: 'Soluciones++'
        }
    }

    /* methods: {},
    watch: {},
    setup() {} */
})

app.mount('#myApp')
// Si fuese una clase:
// app.mount('.myApp')