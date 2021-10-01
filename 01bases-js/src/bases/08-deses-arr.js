const characters = ['Goku', 'Vegeta', 'Trunks']

const goku = characters[0]
const trunks = characters[2]

console.log(goku, trunks)

// Desestructurar el arreglo characters
const [g, v, t, k = 'Sin valor'] = characters

console.log(g, v, t, k)

// Si quiero desestructurar solo el 3er elemento
const [, , e3] = characters
console.log(e3)

// Otro ejemplo
const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters, numbers)

// Otro ejemplo más
const returnArray2 = (arr) => {
    return [arr[0], arr[1]]
}

const [letters2, numbers2] = returnArray2(['ABC', 123])

console.log(letters2, numbers2)