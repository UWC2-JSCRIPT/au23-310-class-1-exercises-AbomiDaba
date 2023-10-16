/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const largeArea = Math.PI * Math.pow(17/2, 2);
const smallArea = Math.PI * Math.pow(13/2, 2);

// 2. What is the cost per square inch of each pizza?
let largeCost = 19.99/largeArea;
let smallCost = 12.99/smallArea;

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
let card1 = Math.ceil(Math.random * 13);
let card2 = Math.ceil(Math.random * 13);
let card3 = Math.ceil(Math.random * 13);

// 4. Draw 3 cards and use Math to determine the highest
// card
let highestCard = Math.max(card1, card2, card3);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = "Abomi";
let lastName = "Daba";
let streetAddress = "123 Main st";
let city = "DeSoto";
let state = "Texas";
let zip = "75123";

let printedAddress = `${firstName} ${lastName}\\n${streetAddress}\\n${city}, ${state} ${zip}`

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let extractedName = printedAddress.indexOf(0);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 3, 1);
const startDate = new Date(2020, 0, 1);

let startTime = Date.parse(startDate);
let endTime = Date.parse(endDate);

let middletime = (startTime + endTime)/2;

let middleDate = new Date(middletime);

