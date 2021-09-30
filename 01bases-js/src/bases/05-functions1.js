// Función tradicional
function saludar1(nombre){
    return `Hola ${ nombre }`
}

// Función anónima
const saludar2 = function(nombre){
    return `Hola ${ nombre }`
}

// Función flecha
const saludar3 = (nombre) => `Hola ${ nombre }`

const nombre = 'Rosa'

// Otro ejemplo de función flecha
const getUser = () => ({ 
    uid: 'ABC123', 
    username: 'Guillermo007' 
})

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'       
    }
]

const existe = heroes.some((heroe) => heroe.id === 1)

console.log(saludar1(nombre))
console.log(saludar2(nombre))
console.log(saludar3(nombre))
console.log(getUser())
console.log(existe)