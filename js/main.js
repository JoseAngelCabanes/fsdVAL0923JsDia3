// // KATA fizzbuzz
// // Objetivo: Escribe un programa que muestre en la consola los números del 1 al 100, pero con las siguientes reglas especiales:

// // for (let i = 1; i <= 100; i++) {
// //     console.log(i);
// // }

// // Si el número es divisible por 3, en lugar de imprimir el número, se debe imprimir "Fizz"
// // Si el número es divisible por 5, en lugar de imprimir el número, se debe imprimir "Buzz"
// // Hacerlo función
// function fizzBuzz (limit){
//     if(typeof(limit)=== "string") {
//         console.log("Debes introducir un número válido");
//         return;
//     }

// for (let i = 1; i <= limit; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0){
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }
// }

// fizzBuzz(30)

// const heart = document.getElementById(`heart`);

// heart.addEventListener(`click`, function () {
//   console.log(heart.innerText);

//   if (heart.innerText === "🖤") {
//     heart.innerText = "❤️";
//   } else if (heart.innerText === "❤️") {
//     heart.innerText = "🧡";
//   } else {
//     heart.innerText = "🖤";
//   }
// });












// // VALIDO LETRA Y NUMERO COMPATIBLE

// function validarDNI(numeroDNI, letra) {
//   const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKET";

//   // VERIFICO SI EL NUMERO DEL DNI ES VÁLIDO
//   if (!Number.isInteger(numeroDNI) || numeroDNI < 1 || numeroDNI > 99999999) {
//     return false; // AQUÍ SERÍA NO VÁLIDO
//   }

//   // CALCULAMOS LA LETRA CORRESPONDIENTE AL DNI
//   const letraCalculada = letrasDNI.charAt(numeroDNI % 23);

//   // COMPARAMOS LA LETRA CALCULADA CON LA PROPORCIONADA
//   if (letraCalculada === letra.toUpperCase()) {
//     return true; // SON COMPATIBLES
//   } else {
//     return false; // NO SON COMPATIBLES
//   }
// }

// // USO
// const numeroDNI = 12345678;
// const letra = "Z";

// if (validarDNI(numeroDNI, letra)) {
//   console.log("El DNI y la letra son compatibles.");
// } else {
//   console.log("El DNI y la letra no son compatibles.");
// }









// CALCULO LA LETRA CORRESPONDIENTE A PARTIR DEL NÚMERO

function obtenerLetraDNI(numeroDNI) {
  const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKET";

  if (!Number.isInteger(numeroDNI) || numeroDNI < 1 || numeroDNI > 99999999) {
    return null;
  }

  // CALCULAR LETRA CORRESPONDIENTE
  const letraCalculada = letrasDNI.charAt(numeroDNI % 23);

  return letraCalculada;
}

// USO
const numeroDNI = 12345678;

const letraCalculada = obtenerLetraDNI(numeroDNI);

if (letraCalculada !== null) {
  console.log(
    `La letra correspondiente al número ${numeroDNI} es: ${letraCalculada}`
  );
} else {
  console.log("Número de DNI no válido.");
}
