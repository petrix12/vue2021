const arreglo1 = []
const arreglo2 = new Array()
/* la forma en que se definieron los arreglos 1 y 2 son equivalentes */

const arreglo3 = [1, 2, 3, 4]
// agregar un elemento al arreglo:
arreglo3.push(5)

const arreglo4 = [ ...arreglo3 ]
arreglo4.push(6)

const arreglo5 = arreglo4.map(function(n){
    // return 1
    return n * 2
})

console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3)
console.log(arreglo4)
console.log(arreglo5)