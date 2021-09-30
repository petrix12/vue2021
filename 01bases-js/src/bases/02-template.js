const nombre = 'Leticia'
const apellido = 'Rodríguez'

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto)

console.log(`Resultado: ${ 7 + 18 }`)

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)