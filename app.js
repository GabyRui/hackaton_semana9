/* EJERCICIO 1

Calcular la factorial de un número:
Ejm:
Ingreso: 6
Salida: 6 x 5 x 4 x 3 x 2 x 1 = 720*/


/* const factorial = parseInt(prompt('Ingresar un número'))
let resultado = 1

for (let i = 1; i <= factorial; i++) { 
    resultado = resultado * i */
    //resultado *= i
    /* resultado = 1 * 1 = 1*/ 
    /* resultado = 1 * 2 = 2*/
    /* resultado = 2 * 3 = 6*/
    /* resultado = 6 * 4 = 24*/
/* }
console.log(resultado); */


/* EJERCICIO 2 */

/* const arregloNotas = [
   { 
    nombre: 'David',
    nota: 80,
   },
   { 
    nombre: 'Vinoth',
    nota: 77,
   },
   { 
    nombre: 'Divya',
    nota: 88,
   },
   { 
    nombre: 'Ishitha',
    nota: 95,
   },
   { 
    nombre: 'Thomas',
    nota: 68,
   },
]

let sumaNotas = 0
let promedio = 0

for (let i = 0; i < arregloNotas.length; i++){
    sumaNotas = sumaNotas + arregloNotas[i].nota
    promedio = sumaNotas / arregloNotas.length
}
console.log(promedio);

if (promedio < 60){
    console.log('El nivel es F') ;   
}
else if (promedio < 70){
    console.log('El nivel es D');
}

else if (promedio < 80){
    console.log('El nivel es C');
}

else if (promedio < 90){
    console.log('El nivel es B');
}

else if (promedio < 100){
    console.log('El nivel es A');
}
 */

/* EJERCICIO 3 */

/* for (let i = 1; i <= 15; i++ ) {
    if (i % 2 === 0) {
        console.log(`${i} es par`);
    }

    else {
        console.log(`${i} es impar`);
    }
} 
 */

/* EJERCICIO 4 */

/* for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - "FizzBuzz"`)
    }
    else if ( i % 3 === 0) {
        console.log(`${i} -"Fizz"`);
    }
    else if ( i % 5 === 0) {
        console.log(`${i} - "Buzz"`);
    }
} */

/* EJERCICIO 5 */

/* const arreglo = [5, 1, 8, 6, 3];
const arregloNuevo = [];

for (let i = arreglo.length - 1; i >= 0 ; i--){
    arregloNuevo.push(arreglo[i]);
}

console.log(arregloNuevo); */

/*EJERCICIO 6*/

/* const saludo = "hola";
const saludoNuevo = [""];

for (let i = saludo.length - 1; i >= 0 ; i--){
    saludoNuevo.push(saludo[i]);
}

console.log(saludoNuevo); */


/*EJERCICIO 7*/

/* const base = parseInt(prompt('Ingresar la base'))
const exponente = parseInt(prompt('Ingresar el exponente'))

const results = base ** exponente;

alert(results); */


/*EJERCICIO 8*/

/* const arregloNum = [2, 8, 5, 3, 1,];
let result = 0

for (let i = 0; i < arregloNum.length; i++){
    result += arregloNum[i];
}

console.log(result); */


/* EJERCICIO 9 - no me sale*/

/* const arregloOther = [4, 5, 1, 8, 3];
let numMayor = arregloOther[0];

for (let i = 1; i < arregloOther.length; i++) {
    if (arregloOther[i] > numMayor) { */
        /*5 > 4*/
        //1 > 5
        //8 > 5
        //3 > 8
        /* numMayor = arregloOther[i]; */
        /* numMayor = 5 */
        //no entra al if
        //numMayor = 8
        //no entra al if
/*     }
}
console.log(numMayor); */


/* EJERCICIO 10 */

/* const arregloNum = [3, 4, 5, 12, 6, 1, 13];
const numPar = [];

for (let i = 0; i < arreglo.length; i++) {
    if (arregloNum[i] % 2 === 0) {
        numPar.push(arregloNum[i]);
    }
}

console.log(numPar); */


/* EJERCICIO 11 */

const library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    },
    ];

     
    for ( let i = 0; i < library.length; i++){
        if (library[i].readingStatus === true) {
            console.log(`title: ${library[i].title}`);
            console.log (`author: ${library[i].author}`);
        }
    } 

    