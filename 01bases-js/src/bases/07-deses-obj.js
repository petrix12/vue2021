const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    power1: 'Dinero'
}

console.log(person.name)
console.log(person.age)
console.log(person.codeName)

// Desestructurando el objeto persona
const { age, name, codeName, power1 = 'No tiene', power2 = 'No tiene' } = person

console.log(name)
console.log(age)
console.log(codeName)
console.log(power1)
console.log(power2)

// Otro ejemplo de desestructuración
const createHero = (person) => {
    const { age, name, codeName, power } = person
    return {
        id: 11639889,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
}
console.log(createHero(person))

// Esta función es equivalente a la anterior
const createHero2 = ({ age, name, codeName, power }) => {
    return {
        id: 11639889,
        name,
        age,
        codeName,
        power
    }
}
console.log(createHero2(person))

// Esta función es equivalente a la anterior
const createHero3 = ({ age, name, codeName, power }) => ({id: 11639889, name, age, codeName, power})
console.log(createHero3(person))

// Esta función es equivalente a la anterior
const createHero4 = ({ age, name: nombre, codeName, power }) => ({id: 11639889, nombre, age, codeName, power})
console.log(createHero4(person))