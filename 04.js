/*

Gör en funktion: get_average_sum. Funktionen ska ta emot en array som parameter 
och räkna ut genomsnittet och summan av talen du skickade in och returnera de 
två svaren till den som anropar metoden. Du ska returnera svaren som ett objekt
 med egenskaperna average och sum. Du ska inte skriva någon klass utan bara returnera
  ett "fristående" objekt.

Du måste använda en reduce-funktion.

Anropa get_average_sum och skicka med en array med 2 till 10 heltal. Kontrollera
 antalet tal och returnera false om antalet tal är fel eller om ett värde inte är
  ett heltal.

Skriv kod som anropar get_average_sum, sparar resultatet i en variabel och skriver
 ut båda värdena.

OBS! get_average_sum-funktionen i sig får inte innehålla utskrifter, utskriften ska 
ske utanför funktionen.

Exempel på värden och deras svar:

1, 2, 3 ger average=2 och sum=6
4, 5, 6, 7 ger average=5,5 och sum=22
-1, 2, 18 ger average=6,333 och sum=19

*/

sum = 0;
average = 0;

function get_average_sum(arr) {
    for (let element of arr) {
       
        sum += element;
    }

    const reducer = (accumulator, item) => {
        return accumulator + item;
        };

    let reducedArr = arr.reduce(reducer, 0);
    average = reducedArr/arr.length;

    let obj = {
        average: average,
        sum: sum
    }

    return obj;   
}

get_average_sum(arr)
