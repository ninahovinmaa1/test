/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt,
inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett 
palindrom. Ni behöver bara hantera små bokstäver.

*/

let string = 'What is this';

  
function reverse(string){
  let strippedWhiteSpaceStr = string.replace(/\s/g, '');
  let lowerCaseStr = strippedWhiteSpaceStr.toLowerCase();
  
  for(let char of lowerCaseStr){
  	let reversed = "";
    reversed = char + reversed;
  }
}

reverse()


let test_string = 'sirap i paris';
if ( is_palindrome( test_string ) ) {
    console.log( test_string + " is a palindrome" );
} else {
    console.log( test_string + " is NOT a palindrome" );
}
