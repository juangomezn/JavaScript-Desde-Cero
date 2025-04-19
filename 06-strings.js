//Strings

//Concatenacion
let myName = "Juan"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a Caracteres
console.log(greeting[0])
console.log(greeting[10])

//Metodos Comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Juan"))
console.log(greeting.indexOf("David"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Juan"))
console.log(greeting.includes("David"))
console.log(greeting.slice(0, 8))
console.log(greeting.replace("Juan", "David"))

//Template Literals
let message = `Hola mi Nombre es 
Juan David Gomez`

console.log(message)

let email = "gomezninoj681@gmail.com"

console.log(`Hola, ${myName}!, tu email es ${email}`)