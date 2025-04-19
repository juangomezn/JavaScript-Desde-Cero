// 1. Crea una variable para cada operacion aritmetica
let suma = 10 + 5
console.log("El resultado de la suma es " + suma)

let resta = 10 - 5
console.log("El resultado de la resta es " + resta)

let multiplicación = 10 * 5
console.log("El resultado de la Multiplicacion es " + multiplicación)

let division = 10 / 5
console.log("El resultado de la division es " + division)

let modulo = 10 % 5
console.log("El modulo de la operacion es " + modulo)

let exponente = 5 ** 10
console.log("La potecionacion de 5 a la 10 es " + exponente)

let num = 5

let incremento = ++num
console.log("El resultado del incremento es " + incremento)

let num_1 = 5

let decremento = --num_1
console.log("El resultado del decremento es " + decremento)

// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas
let valor_1 = 10
// Asignación de suma (+=)
valor_1 += suma // Equivalente a: valor = valor + suma (10 + 15)
console.log("Asignación de suma (+=): " + valor_1)

let valor_2 = 10
// Asignación de resta (-=)
valor_2 -= resta // Equivalente a: valor = valor - resta (10 - 5)
console.log("Asignación de resta (-=): " + valor_2)

let valor_3 = 10
// Asignación de multiplicación (*=)
valor_3 *= multiplicación // Equivalente a: valor = valor * multiplicación (10 * 5)
console.log("Asignación de multiplicación (*=): " + valor_3)

let valor_4 = 10
// Asignación de división (/=)
valor_4 /= division // Equivalente a: valor = valor / division (10 / 5)
console.log("Asignación de división (/=): " + valor_4)

let valor_5 = 10
// Asignación de modulo (%=)
valor_5 %= modulo // Equivalente a: valor = valor % modulo (10 % 5)
console.log("Asignación de modulo (%=): " + valor_5)

let valor_6 = 1
//Asignacion de exponente (**=)
valor_6 **= exponente // Equivalente a: valor = valor ** exponente (10 ** 5)
console.log("Asignación de exponente (**=): " + valor_6)

let valor_7 = 10
// Asignación de incremento (++)
valor_7++ // Equivalente a: valor = valor + 1 (10 + 1)
console.log("Asignación de incremento (++): " + valor_7)

let valor_8 = 10
// Asignación de decremento (--)
valor_8-- //Equivalente a: valor = valor - 1 (10 - 1)
console.log("Asignación de decremento (--): " + valor_8)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
console.log(10 > 5)
console.log(10 > 5 && 20 < 50)
console.log(10 > 5 || 20 < 50)
console.log(10 == 10)
console.log(!(10 == 1))

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(10 >= 10)
console.log(5 <= 10)
console.log(0 == false)
console.log(1 == true)
console.log(undefined == null)

// 5. Utiliza el operador logico and
edad = 20
tieneLicencia = true

if (edad >= 18 && tieneLicencia) {
    console.log("Puede Conducir")
} else {
    console.log("No puede conducir")
}

// 6. Utiliza el operador logico or
numberComparation = 50

if (numberComparation > 0 || numberComparation == 0) {
    console.log("Numero positivo")
} else {
    console.log("Numero negativo")
}

// 7. Combina ambos operadores logicos
edad = 17
tieneInvitacion = false
esAcompañado = true

if (edad >= 18 || tieneInvitacion && esAcompañado){
    console.log("Puede ingresar al evento")
} else if (edad >= 16 && tieneInvitacion || esAcompañado){
    console.log("Puede ingresar al evento con condiciones")
} else {
    console.log("No puede ingresar al evento")
}

// 8. Añade alguna negacion
if ((edad >= 18 || tieneInvitacion) && !esAcompañado){
    console.log("Puede ingresar al evento solo")
} else if (edad >= 16 && (tieneInvitacion || esAcompañado)){
    console.log("Puede ingresar al evento con condiciones")
} else {
    console.log("No puede ingresar al evento")
}

//9. Usa el operador ternario
let isRainning_1 

rain = 0

if (rain == 1){
    isRainning_1 = true
}   else if (rain = 0){
    isRainning_1 = false
}    

isRainning_1 ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

// 10. Combina operadores aritmeticos, de comparacion y logicos
horaActual = 14 // Formato 24 h
temperatura = 28
humedadTierra = 30
estaLloviendo = false

if ((horaActual < 10 || horaActual > 18) && humedadTierra < 40 && (!estaLloviendo)){
    console.log("🚿 Activando Sistema de Riego ...")
    console.log("💧 Regando las plantas por 5 minutos") 
} else {
    console.log("⏸️ No es Necesario Regar Ahora")
}
