//array

//Declaracion
let myArray = [] // Recomendado
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion
myArray = [3] //Se ingresan datos en el array
myArray2 = new Array(3) //Se reservan espacio para datos en el array

console.log(myArray)
console.log(myArray2)

//---------------------------------------------------------------------//

myArray = [1, 2, 3, 4] //Insercion de varios datos en el array
myArray2 = new Array(1, 2, 3, 4) //Insercion de varios datos en el array

console.log(myArray)
console.log(myArray2)

//---------------------------------------------------------------------//

myArray = ["Juan", "Gomez", 19, true] //Insercion de varios tipos de datos en el array
myArray2 = new Array("Juan", "Gomez", 19, true) //Insercion de varios tipos de datos en el array

console.log(myArray)
console.log(myArray2)

//---------------------------------------------------------------------//

//Insercion de datos en el array indicando la poscion especifica
myArray2 = new Array(3)
myArray2[0] = "Juan"
myArray2[1] = "Gomez"
myArray2[2] = 19

console.log(myArray2)

myArray = []
myArray[2] = "Juan"
myArray[0] = "Gomez"
myArray[1] = 19;

console.log(myArray)

//---------------------------------------------------------------------//

//Metodos Comunes

myArray = []

//push Insercion de datos en el array
myArray.push("Juan")
myArray.push("David")
myArray.push("Gomez")
myArray.push(19)

console.log(myArray)

//pop Elimina el ultimo elemento de un array y lo devuelve
console.log(myArray.pop()) //Elimina y muestra el ultimo valor del array por consola 
myArray.pop() //Solamente elimina el elemento sin mostrarlo

console.log(myArray)

// shift
console.log(myArray)
console.log(myArray.shift()) //Elimina y muestra el primer valor del array por consola
console.log(myArray)

//unshift
console.log(myArray)
myArray.unshift("Juan", "Gomez") //Agrega elementos al inicio de un array por medio de una lista de elementos
console.log(myArray)

//length
console.log(myArray.length) //Muestra el tamaño del array

//clear
myArray = [] //Recomendado 
myArray.length = 0 // Alternativa
console.log(myArray)

//slice
myArray = ["Juan", "David", "Gomez", 19, true]

let myNewArray = myArray.slice(1, 3) //Crea un nuevo Array a partir de uno existente teniendo en cuenta los indices de las posiciones sin tener en cuenta la segunda 

console.log(myNewArray) //En este  caso si se quiere que aparezca el elemento em posicion 2 debemos escribir como segundo indice la posicion 3 es decir la siguiente posicion
console.log(myArray)

//splice
myArray.splice(1,3) //El splice elimina el elemento indicado en el primer indice y el segundo indica cuantos elementos se van a eliminar

console.log(myArray)

myArray = ["Juan", "David", "Gomez", 19, true]

myArray.splice(1,3,"Nuevo Elemento")
console.log(myArray) //La misma operacion que el splice anterior en este caso se agrega un elemento el cual es insertado como un tercer argumento en el splice
