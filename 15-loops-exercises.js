// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 1; i <= 100; i++){
    suma += i
}
console.log("La suma de los numeros del 1 al 100 es:", suma)

// 3. Crea un bucle que imprima los numeros pares entre el 1 y 50
for(let i = 2; i <= 50; i+=2){
    console.log(i)
}

// 4. Dado un array de nombres usa un bucle para imprimir cada nombre en la consola
names = ["Juan", "Andres", "Tomas", "Samuel", "Santiago"]

for(let name of names){
    console.log("El nombre contenido en el array es", name)
}

// 5. Escribe un bucle que cuente la cantidad de vocales en una cadena de texto
let text = "Hola, como estas?"
let vowels = "aAeEiIoOuU"
let count = 0

for(let i = 0; i < text.length; i++){
    if(vowels.includes(text[i])){
        count++
    }
}

console.log("La cantidad de vocales en la cadena de texto es:", count);

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y muestra el producto
let numbers = [1, 2, 3, 4, 5]
let product = 1

for(let i = 0; i < numbers.length; i++){
    product *= numbers[i]
}

console.log("El producto de todos ls numeros es:", product)

// 7. Escribe un bucle que escriba la tabla de multiplicacion del 5
for(let i = 0; i <= 10; i++){
    console.log("5 x", i ,"= " + 5 * i)
}

// 8. Usa un bucle para invertir una cadena de texto
let text_ = "Hola, como estas?"
let textReverse = ""

for(let i = text_.length - 1; i >= 0; i--){
    textReverse += text_[i]
}

console.log("La cadena de texto invertida de", text_, "es", textReverse)

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci
let n1 = 0
let n2 = 1

for(let i = 0; i < 10; i++){
    console.log(n1)
    let siguiente = n1 + n2
    n1 = n2
    n2 = siguiente
}

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let mayoresA10 = []

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 10){
        mayoresA10.push(numeros[i])
    }
}

console.log("Los numeros mayores a 10 son:", mayoresA10);