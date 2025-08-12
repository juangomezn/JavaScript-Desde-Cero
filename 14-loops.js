// Loops o Bucles

// For
for (let i = 0; i <= 5; i++){
    console.log(`Hola User ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`);
}

//While

let i = 0

while(i < 5){
    console.log(`Hola ${i}!`)
    i++
}

/*Bucle infinito
while(true){

}*/

//Do While
i = 5
do{
    console.log(`Hola ${i}!`)
} while(i < 5)

//For of

myArray = [1, 2, 3, 4]
mySet = new Set(["Juan", "David", "Gomez", 19, true])
myMap = new Map([
    ["name", "Juan"],
    ["email", "gomezninoj681@gmail.com"],
    ["age", 19],
]);
myString = "Hola JavaScript!";

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}

//Buenas practicas

//Break y Continue
for(let i=0; i<10; i++){
    if(i == 5){
        continue
    } else if (i == 7){
        break
    }
    console.log(`Hola ${i}`)
}