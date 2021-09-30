const persona = {
    nombre: 'Isabel',
    apellido: 'Bazó',
    edad: 130,
    direccion: {
        ciudad: 'Roma',
        zip: 525545,
        lat: 14.5777,
        lng: 3.99988
    }
}

const persona2 = persona

persona2.nombre = 'María'

const persona3 = { ...persona }

persona3.nombre = 'Rebeca'

console.log(persona)
console.log(persona2)
console.log(persona3)