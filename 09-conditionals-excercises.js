// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Juan David"

if (nombre == "Juan David") {
    console.log("Nombre : Juan David")
} else {
    console.log("Nombre Invalido")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos
let user = "User"
let password = "User123."

let loggedUser = "User"
let loggedPassword = "User123."

if (user == loggedUser && password == loggedPassword) {
    console.log("Credenciales Correctas 👍")
    console.log("Ingresando al Sistema... ⏳")
} else {
    console.log("Credenciales incorrectas ")
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let number = 0

if (number > 0) {
    console.log("Numero positivo ➕")
} else if (number === 0) {
    console.log("Numero Igual a Cero 🟰")
} else {
    console.log("Numero negativo ➖")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18 años) e indica cuantos años le faltan
let edad = 1

if (edad >= 18) {
    console.log("👍 Puede Votar ")
} else {
    falta = 18 - edad
    console.log(`❌ No puede votar le faltan ${falta} años 🗳️`)
}

// 5. Usa un operador ternario para asignar el valor "Adulto" o "Menor" a una variable dependiendo de la edad
let age = 18
const valor = age >= 18 ? "Adulto" : "Menor"

console.log(valor)

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable mes
let mes = "Agosto"

if (mes === "Enero" || mes === "Febrero" || mes === "Marzo") {
    console.log(`En el mes de ${mes} nos encontramos en la estacion ❄️ Invierno ❄️`)
} else if (mes === "Abril" || mes === "Mayo" || mes === "Junio") {
    console.log(`En el mes de ${mes} nos encontramos en la estacion 🌻 Primavera 🌻`)
} else if (mes === "Julio" || mes === "Agosto" || mes === "Septiembre") {
    console.log(`En el mes de ${mes} nos encontramos en la estacion ⛱️ Verano ⛱️`)
} else if (mes === "Octubre" || mes === "Noviembre" || mes === "Diciembre") {
    console.log(`En el mes de ${mes} nos encontramos en la estacion 🍂 Otoño 🍂`)
} else {
    console.log(`${mes} No Es Un valor Valido`)
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior  

// 31 dias: Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre
// 30 dias: Abril, Junio, Septiembre, Noviembre
// 28 dias: Febrero

if (mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre") {
    console.log(`El mes de ${mes} tiene 31 dias`)
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
    console.log(`El mes de ${mes} tiene 30 dias`)
} else if (mes === "Febrero") {
    console.log(`El mes de ${mes} tiene 28 dias`)
} else {
    console.log(`${mes} No Es Un valor Valido`)
}

// Switch Case

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo el idioma
let idioma = "Ingles"
let saludoIdioma

switch (idioma) {
    case "Ingles":
        saludoIdioma = "Hello!"
        break
    case "Spanish":
        saludoIdioma = "Hola!"
        break
    case "Frances":
        saludoIdioma = "Bonjour!"
        break
    case "Aleman":
        saludoIdioma = "Hallo!"
        break
    default:
        saludoIdioma = "Idioma Invalido"
}

console.log(`El saludo comun en ${idioma} es ${saludoIdioma}`)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
// => 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable mes
let estacion

switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
        estacion = "❄️ Invierno ❄️"
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        estacion = "🌻 Primavera 🌻"
        break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
        estacion = "⛱️ Verano ⛱️"
        break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        estacion = "🍂  Otoño 🍂"
        break;
    default:
        estacion = "Ingresa un Mes Valido"
}

console.log(`En el mes ${mes} se da ${estacion}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
// => 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior  

// 31 dias: Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre
// 30 dias: Abril, Junio, Septiembre, Noviembre
// 28 dias: Febrero

let diasMes

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        diasMes = "31 Dias"
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        diasMes = "30 Dias";
        break;
    case "Febrero":
        diasMes = "28 Dias"
        break;
    default:
        diasMes = "Ingresa un Mes Valido"
}

console.log(`En el mes ${mes} hay ${diasMes}`)