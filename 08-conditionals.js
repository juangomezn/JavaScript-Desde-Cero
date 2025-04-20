//Conditionals

//if, else if, else

let age = 19

//if (si?)
if (age == 19) {
    console.log("La edad es 19")
}

// else
if (age == 19) {
    console.log("La edad es 19")
} else {
    console.log("La edad no es 19")
}

//else if
if (age == 19) {
    console.log("La edad es 19")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 19 y no es menor de edad")
}

//Operador Ternario
const message = age = 19 ? "La edad es 19 años" : "La edad no es 19 años"
console.log(message)

//Switch
let day = 5
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia invalido"
}

console.log(dayName)