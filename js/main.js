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

const heart = document.getElementById(`heart`);

heart.addEventListener(`click`, function(){
    console.log(heart.innerText);

    if (heart.innerText === "🖤") {
        heart.innerText = "❤️";
    } else if (heart.innerText === "❤️") {
        heart.innerText = "🧡";
    } else {
        heart.innerText = "🖤";
    }

})
