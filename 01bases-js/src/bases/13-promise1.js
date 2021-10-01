console.log('Inicio')

new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta')
}).then(msg => console.log(msg))

console.log('Fin')