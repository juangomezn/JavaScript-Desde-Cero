// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "conejo", "caballo", "pajaro"];
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("leon")
animales.push("tigre")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "Cien Años de Soledad", "El principito", "La ciudad y los perros", "Dracula"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Don quijote")
libros.add("1984")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("1984")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)){
    console.log(`El mes numero 5 es: ${meses.get(5)}`)
}

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
meses.set('Verano',['Junio', 'Julio', 'Agosoto'])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

let numerosSet = new Set(numeros)
console.log(numerosSet)

let numerosMap = new Map()
numerosMap.set('numeros', numerosSet)
console.log(numerosMap)