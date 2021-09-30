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

const existe = heroes.find((heroe) => heroe.id === 1)

// Desestructurado
const { id, name } = heroes.find((heroe) => heroe.id === 2)

console.log(existe.name)
console.log(id)
console.log(name)