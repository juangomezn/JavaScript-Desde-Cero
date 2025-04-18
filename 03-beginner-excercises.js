// 1. Escribe un comentario en una línea

    //Comentario en una linea

// 2. Escribe un comentario en varias líneas

    /*
    Comentario
    en varias
    lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let nombre = "Juan"
    let edad = 19
    let altura = 1.75
    let isMayorDeEdad = true
    let undefinedValue
    let nullValue = null
    let mySymbol = Symbol("mySymbol")
    let myBigInt = 123456789012345678901234567890123456789n

// 4. Imprime por consola el valor de todas las variables

    console.log(nombre)
    console.log(edad)
    console.log(altura)
    console.log(isMayorDeEdad)
    console.log(undefinedValue)
    console.log(nullValue)
    console.log(mySymbol)
    console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof nombre)
    console.log(typeof edad)
    console.log(typeof altura)
    console.log(typeof isMayorDeEdad)
    console.log(typeof undefinedValue)
    console.log(typeof nullValue)
    console.log(typeof mySymbol)
    console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    nombre = "Juan David";
    edad = 20;
    altura = 1.80;
    isMayorDeEdad = false;
    undefinedValue = "definedValue";
    nullValue = "definedValue";
    mySymbol = Symbol("myNewSymbol");
    myBigInt = 987654321098765432109876543210987654321n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    nombre = 10 // String a Numero
    edad = "Veinte" // Numero a String
    altura = true // Numero decimal a boolean
    isMayorDeEdad =  //Boolena a Null
    undefinedValue = "definedValue" //String a Undefined
    nullValue = {} //String a objeto
    mySymbol = "SymbolAsString" //Symbol a String
    myBigInt = 20 //BigInt a Numero

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const myNumber = 42; //Numero
    const myString = "Hola Mundo"; //String
    const myBoolean = true; //Boolean
    const myNull = null; //Null
    const myUndefined = undefined; //Undefined
    const mySymbolConst = Symbol("mySymbol"); //Symbol
    const myBigIntConst = 987654321098765432109876543210987654321n //BigInt

// 9. A continuación, modifica los valores de las constantes

    /*myNumber = 20 
    myString = "newString"
    myBoolean = false
    myNull = "Not Null"
    myUndefined = "definedValue"
    mySymbolConst = Symbol("newSymbol")
    myBigIntConst = 999n*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    /*myNumber = 20 
    myString = "newString"
    myBoolean = false
    myNull = "Not Null"
    myUndefined = "definedValue"
    mySymbolConst = Symbol("newSymbol")
    myBigIntConst = 999n*/