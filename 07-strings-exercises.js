// 1. Concatena dos cadenas de texto
name = "Juan David"
age = "19"
favoriteSoccerTeam = "Fc Barcelona"
text = "Hola!, mi nombre es " + name + " tengo " + age + " años de edad y mi equipo favorito de futbol es el " + favoriteSoccerTeam

console.log(text)

// 2. Muestra la longitud de una cadena de texto
console.log(text.length)

// 3. Muestra el primer ultimo caracter de un string
let primerCaracter = text.charAt(0)
let ultimoCaracter = text.charAt(text.length-1)

console.log(`El primer caracter de el string es ${primerCaracter} y el ultimo caracter del string es ${ultimoCaracter}`)

// 4. Convierte a mayusculas y minusculas un string
console.log(text.toUpperCase())
console.log(text.toLowerCase())

// 5. Crea una cadena de texto en varias lineas
text_1 = `Hola!, mi nombre es Juan David,
tengo 19 años de edad,
mi equipo favorito de futbol es el Fc Barcelona`

console.log(text_1)

// 6. Interpola el valor de una variable en un string
let equipo = "Fc Barcelona"
let jugador = "Lionel Messi"

console.log(`El jugador ${jugador} desarrollo la mayoria de su carrera deportiva en el ${equipo}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(text.replaceAll(" ", "-"))

// 8.Comprueba si una cadena de texto contiene una palabra en concreto
console.log(text.includes("Barcelona"))

// 9. Comprueba si dos string son iguales
text_2 = "string numero 1"
text_3 = "string numero 1"
text_4 = "string igual al string 1" 

//Comparacion en la cual se muestra que son exactamente iguales
if (text_2 === text_3) {
    console.log("Cadenas de texto exactamente iguales")
} else {
    console.log("No son iguales")
}

//Comparacion en la cual se muestra que no son exactamente iguales
if (text_2 === text_4) {
    console.log("Cadenas de texto exactamente iguales")
} else {
    console.log("No son iguales")
}

// 10. Comprueba si dos string tiene la misma longitud

//Comparación con dos cadenas de texto que tienen la misma longitud
if (text_2.length == text_3.length) {
    console.log("Las cadenas de texto tienen la misma longitud")
} else {
    console.log("Las cadenas de texto no tienen la misma longitud")
}

//Comparacion con dos cadenas de texto que no tienen la misma longitud
if (text_2.length == text_4.length) {
    console.log("Las cadenas de texto tienen la misma longitud")
} else {
    console.log("Las cadenas de texto no tienen la misma longitud")
}