console.log('Inicio')

new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa 1')
    reject('Promesa 1 resuelta con error')
})
.then(msg => console.log(msg))
.catch(err => console.log(err))

// La Promise2 es equivalente a Promise
new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa 2')
    reject('Promesa 2 resuelta con error')
})
.then(console.log)
.catch(console.log)

console.log('Fin')