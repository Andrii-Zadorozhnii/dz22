/*
Maximum.

1.Ask the user for the radius of a circle and print the area of such a circle.
2.Ask the user the distance in kilometers between two cities and how many hours they want to get there. Calculate the speed at which you need to move to be on time.
3.Implement a currency converter. The user enters dollars, the program converts them into euros. The exchange rate is kept constant.

*/

//______________1______________
let circleRadius = prompt("Enter the radius of a circle");
let circleArea = circleRadius * circleRadius * Math.PI;
alert("The area of a circle with radius " + circleRadius + " is " + circleArea)

//______________2______________

let distanceBetweenCities = prompt("Enter the distance in kilometers between two cities");
let hoursNeeded = prompt("Enter the number of hours you want to get there");
let speed = distanceBetweenCities / hoursNeeded;
alert("The speed at which you need to move is " + speed )

//______________3______________

let dollars = prompt("Enter dollars");
const exchangeRate = 0.85;
let euros = dollars * exchangeRate;
alert("Finaly you will have: " + dollars + " * " + exchangeRate + " = " + euros + " euros");