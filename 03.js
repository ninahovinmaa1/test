/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt,
inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett 
palindrom. Ni behöver bara hantera små bokstäver.

*/ 
let testStr="Sirap i paris"

function is_palindrome(string) {
  let formatted_str = string.replace(/\s/g, "").toLowerCase(); //strips whitespace and makes letters lowercase
  let reversed_str = formatted_str.split("").reverse().join(""); //splits string into an array of letters, reverses the array of letters, and joins the letters to a string again. 
 
  if (formatted_str == reversed_str) {      //checks if string is a palindrome by comparing formatted string with reversed string.
    return true
  }
  else {
    return false
  }
}

//console.log(is_palindrome(testStr))


/*let test_string = 'sirap i paris';
if ( is_palindrome( test_string ) ) {
    console.log( test_string + " is a palindrome" );
} else {
    console.log( test_string + " is NOT a palindrome" );
}*/
