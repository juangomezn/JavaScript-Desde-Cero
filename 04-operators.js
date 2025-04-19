//Operadores

//Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //Division
console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++
console.log(a) //Incremento

b--
console.log(b) //Decremento

//Operadores de Asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de Comparación

console.log(a > b) //Mayor que
console.log(a < b) //Menor que
console.log(a >= b) //Mayor o Igual que
console.log(a <= b) //Menor o Igual que
console.log(a == b) //Igual a
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a == a)
console.log(a === a) //Igualdad por identidad (tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values(valores verdaderos)

//Todos los numeros positivos y negativos menos 0
//Todas las cadenas de texto menos las vacias
//El boolean True

//Falsy values (valores falsos)
//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacias

//Operadores Logicos

// ADN (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 < 20 && 30 > 40)

// OR (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20))

//Operador Ternario

let isRainning = true

isRainning ? console.log("Esta lloviendo") : console.log("No esta lloviendo")


