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
    },
    methods: {
        changeQuote(event){
            console.log('Hola María Valentina', event)
            this.message = 'Hola Rebeca'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
    /* 
    watch: {},
    setup() {} */
})

app.mount('#myApp')
// Si fuese una clase:
// app.mount('.myApp')