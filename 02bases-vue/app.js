// console.log(Vue)
const app = Vue.createApp({
    template: `
        <h1>Hola Guillermo y Rosita</h1>
        <p>Desde app.js</p>
    `
})

app.mount('#myApp')
// Si fuese una clase:
// app.mount('.myApp')