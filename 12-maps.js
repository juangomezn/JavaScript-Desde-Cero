//maps

//Declaracion
let myMap = new Map();

console.log(myMap);

//Inicializacion
myMap = new Map([
    ["name", "Juan"],
    ["email", "gomezninoj681@gmail.com"],
    ["age", 19],
]);

console.log(myMap)

//Metodos y propiedades

//set
myMap.set("lastname", "Gomez"); //Se agregan datos al map
myMap.set("name", "David"); // Si se coloca un valor a una llave que ya existe se le modifica el valor de la misma

console.log(myMap);

//get 
console.log(myMap.get("name")) // Se obtiene el valor de la llave name
console.log(myMap.get("surname")) // Pero si se hace un get de una llave que no existe, nos devuelve undefined

//has
console.log(myMap.has("name")) // Has de vuelve un valor booleano si el elemento se encuentra dentro del map
console.log(myMap.has("surname"))

//delete
myMap.delete("email") // Elimina el elemento de la llave email
console.log(myMap)

//keys, values y entries
for(const key of myMap.keys()){
    console.log(key)
}

for(const values of myMap.values()){
    console.log(values)
}
for(const entries of myMap.entries()){
    console.log(entries)
}

//size
console.log(myMap.size);

// //clear
// myMap.clear() // Elimina todos los elementos del map
// console.log(myMap)

