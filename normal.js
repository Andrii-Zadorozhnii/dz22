
/*
Normal

1. Ask for the username and print "Hello, *name*";
2. Ask for the user's year of birth, calculate his/her age and print the result. Use the current year as a constant in the code;
3. Ask the user the length of a side of a square and print the perimeter of the square
*/

//______________1______________
let userName = prompt("Please write your name:");
alert("Hello, " + userName + "!");

//______________2______________
let userYearOfBirth = prompt("Please write your year of birth:");
let userAge = 2023 - userYearOfBirth;
alert("Your age is " + userAge + ".");

//______________3______________
let lenghtSide = prompt("Please write the length of a side of a square:");
let perimeterSquare = lenghtSide * 4;
alert("The perimeter of the square is " + perimeterSquare + ".");

