//sets

//Declaracion
let mySet = new Set()

//Inicializacion
mySet = new Set(["Juan", "David", "Gomez", 19, true])

console.log(mySet)

//Metodos Comunes

//add
mySet.add("gomezninoj681@gmail.com") //Agrega elementos al final del set
console.log(mySet)

//delete
mySet.delete("Juan") //Elimina elementos del set indicando el elemento que quiero borrar
console.log(mySet)

console.log(mySet.delete("gomezninoj681@gmail.com")) //La misma operacion que el anterior delete la diferencia es que aqui muestra un true si el elemento exixtia y se elimino 
console.log(mySet)

//has
console.log(mySet.has("David")) // Evalua si existe un elemento en el Set
console.log(mySet.has("Pablo"))

//size
console.log(mySet.size) // Muestra el tamaño del set
console.log(mySet)

//Convertir un Set en Array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un Array en Set
mySet = new Set(myArray)
console.log(mySet)

//-------------------------------------

//La principal diferencia entre Set y Array es que los Set no permiten elementos duplicados los Array si lo permiten

console.log(mySet)

mySet.add("David")
mySet.add("David")
mySet.add("David")
mySet.add("Dabid") //Precaucion ya que los Set son key sensitive, es decir si agregamos un elemento con mayusculas y minusculas el set los considera como diferentes y los agrega

console.log(mySet) // Como los Arrays no permiten elementos duplicados este set no cambio en nada luego de agregar el mismo elemento varias veces

//-------------------------------------

console.log(myArray)

myArray.push("David")
myArray.push("David")
myArray.push("David")

console.log(myArray) // El array si permite agregar elementos repetidos en varias ocasiones como en el ejemplo