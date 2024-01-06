
//      Question No 1

var arrMulti = [[[]]]
document.querySelector('.answer1').innerHTML = arrMulti;

//    Question No 2

var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

var displayElement = document.querySelector('.answer2');


if (displayElement) {

    var table = document.createElement('table');

    for (var i = 0; i < multiArray.length; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < multiArray[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = multiArray[i][j];
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    displayElement.appendChild(table);
} else {
    console.error('Element with ID "matrixDisplay" not found.');
}



//    Question No 3

var countingArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.querySelector('.orignalArray').innerHTML = "Original Array: " + countingArrays;

var displayCountingArrays = document.querySelector('.answer3');

var countingStore = '';
if (displayCountingArrays) {

    for (var i = 0; i < countingArrays.length; i++) {
        countingStore += countingArrays[i] + '<br/>';
    }
    document.querySelector('.answer3').innerHTML = countingStore;
}


// Question no 4. Write a program to print multiplication table of any 
//    number using for loop. Table number & length should be 
//   taken as an input from user.

function tableFunction() {

    var tableInput = document.querySelector('#table').value;

    var tableLength = document.querySelector('#length').value;

    var tablePrint = document.querySelector('.answer4');

    var tablePrintContent = "";

    for (var i = 1; i <= tableLength; i++) {

        tablePrintContent += tableInput + " x " + i + " = " + tableInput * i + "<br />";
    }

    tablePrint.innerHTML = tablePrintContent;
}



// Question no  5. Write a program to print items of the following array 
// using for loop:fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.querySelector('.orignalFruitsArray').innerHTML = 'Fruits: ' + fruits;
var newFruits = "";
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] == 'apple') {

        var check = document.querySelector('.fruit1').innerHTML = 'Element at index ' + i + ' ' + ' is Apple'

    } else if (fruits[i] === 'banana') {
        document.querySelector('.fruit2').innerHTML = 'Element at index ' + i + ' ' + ' is Banana'
    } else if (fruits[i] === 'mango') {
        document.querySelector('.fruit3').innerHTML = 'Element at index ' + i + ' ' + ' is Mango'
    } else if (fruits[i] === 'orange') {
        document.querySelector('.fruit4').innerHTML = 'Element at index ' + i + ' ' + ' is Orange'
    } else if (fruits[i] === 'strawberry') {
        document.querySelector('.fruit5').innerHTML = 'Element at index ' + i + ' ' + ' is Strawberry'
    }
    newFruits += fruits[i] + '<br/>';
}
document.querySelector('.answer5').innerHTML = newFruits;




//  Question no 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var counting1To15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.querySelector('.counting').innerHTML = 'Counting <br><br>' + counting1To15;

var counting1To10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
counting1To10.reverse();
document.querySelector('.reverseCounting').innerHTML = 'Reverse<br><br>' + counting1To10;


var evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

var checkNumber = '';
var oddNumber = '';

for (var i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) {
        checkNumber += evenNumbers[i] + ",";

    } else {
        oddNumber += evenNumbers[i] + ",";
    }
    checkNumber.split(' '),
        document.querySelector('.evenNumber').innerHTML = 'Even <br><br>' + checkNumber;
    document.querySelector('.oddNumber').innerHTML = 'Odd <br><br>' + oddNumber;
}

var series = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k']
document.querySelector('.series').innerHTML = 'series <br><br>' + series;



// Question no 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

function bakeryFunction() {
    var bakeryInput = document.querySelector('#bakeryInput').value;
    bakeryInput = bakeryInput.toLowerCase();

    console.log(bakeryInput);

    for (var i = 0; i < bakeryItems.length; i++) {

        if (bakeryItems[i] === bakeryInput) {
            found = true;
            document.querySelector('.bakery').innerHTML = bakeryInput + 'is <b>Available</b> at index no ' + i;
            break;
        } else {
            document.querySelector('.bakery').innerHTML = 'We are sorry, ' + bakeryInput + ' <b>not available</b> in our bakery';
        }
    }
}

// Question no 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].


var maxNumber = [24, 53, 78, 91, 12];
document.querySelector(".maxNumber").innerHTML = `Array items: ` + maxNumber;
var found = (Math.max.apply(null, maxNumber));
document.querySelector(".foundMaxNumber").innerHTML = `The largest number is: ` + found;

// can be do by this
// for (var i = 0; i < maxNumber.length; i++){
//     if (maxNumber[i] > found) {
//         found = maxNumber[i]; 
//     }
// }
// 


// Question no 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var minNumbers = [24, 53, 78, 91, 12];
document.querySelector(".minNumber").innerHTML = `Array items: ` + minNumbers;

var minFound = (Math.min.apply(null, minNumbers));
document.querySelector(".foundMinNumber").innerHTML = `The smallest number is: ` + minFound;


//  Question no 10. Write a program to print multiples of 5 ranging 1 to 100.

var ranging = '';


for (var i = 5; i <= 100; i++) {
    if (i % 5 == 0) {

        ranging += (i) + ","
    }
}
ranging.split(' '),

    document.querySelector('.maxNumberBy5').innerHTML = ranging;



// chapter No 21 to 25 

// Question no 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
function checkAnswer() {
    var firstName = prompt("Enter your first name", 'adam');
    var lastName = prompt("Enter your last name", 'john');

    var capitalize = firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1);
    var capitalizeLast = lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1);

    var fullName = capitalize + " " + capitalizeLast;

    alert('welcome ' + fullName);
    document.querySelector(".answer1Chapter21").innerHTML = 'welcome: ' + fullName;

}


// Question no 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user input in your browser


function favorite() {
    var findLength = document.querySelector('#findingLength').value;

    var lengthFound = findLength.length;

    document.querySelector('.answer2Chapter21').innerHTML = 'My Favorite Phone is: ' + findLength + "</br>" + " Length of string is: " + lengthFound;

}


// Question no 3. Write a program to find the index of letter “n” in the word
//  “Pakistani” and display the result in your browser .

var nationality = ("pakistani");

var findIndex = nationality.indexOf('n');

document.querySelector('.answer3Chapter21').innerHTML = "String " + nationality + "</br> " + "Index of 'n'  " + findIndex;


// Question No 4. Write a program to find the last index of letter “l” in the 
//  word “Hello World” and display the result in your browser.

var massage = "Hello World";

var massageLastIndex = massage.lastIndexOf("l");

document.querySelector('.answer4Chapter21').innerHTML = "String " + massage + "</br> " + "Last Index of 'l'  " + massageLastIndex;



// Question no 5. Write a program to find the character at 3rd index in the 
//  word “Pakistani” and display the result in your browser.

var str = ("Pakistani");

var strFound = str.charAt("3");
document.querySelector('.answer5Chapter21').innerHTML = "String " + str + "</br> " + "Character at index 3:  " + strFound;


// Question no 6. Repeat Q1 using string concat() method

function checkAnswerQ6() {
    var firstName = prompt("Enter your first name", 'adam');
    var lastName = prompt("Enter your last name", 'john');

    var capitalize = firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1);
    var capitalizeLast = lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1);

    var fullName = capitalize.concat(" ", capitalizeLast);

    alert('welcome ' + fullName);
    document.querySelector(".answer6Chapter21").innerHTML = 'welcome: ' + fullName;

}


// Question no 7. Write a program to replace the “Hyder” to “Islam” in the 
//  word “Hyderabad” and display the result in your browser.

var city = ("Hyderabad");

var cityChange = city.replace("Hyder", "Islam");

document.querySelector(".answer7Chapter21").innerHTML = 'City: ' + city + "<br>" + "After replacement: " + cityChange;


// Question no 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

var message2 = ("Ali and Sami are best friends. They play cricket and football together.");

var changesOfAnd = message2.replace(/and/g, "&");

document.querySelector(".answer8Chapter21").innerHTML = 'String: ' + message2 + "<br> <br>" + "After: " + changesOfAnd;


// Question no 9. Write a program that converts a string “472” to a number 
//  472. Display the values & types in your browser.

var changingNumber = ('472');

var typeStr = (typeof changingNumber);


var changedNumber = parseInt(changingNumber);

var typeNum = (typeof changedNumber);



document.querySelector(".answer9Chapter21").innerHTML = "Value: " + changingNumber + "<br> <br>" + "Type: " + typeStr + "<br> <br>" + "Value: " + changedNumber + "<br> <br>" + "Type: " + typeNum;



// question no 10. Write a program that takes user input. Convert and show the input in capital letters.

function changeCase() {
    var changeLetter = document.querySelector("#changeCase").value;

    var changeToCap = changeLetter.toLocaleUpperCase();

    var checked = document.querySelector(".answer10Chapter21").innerHTML = "User input: " + changeLetter + "<br>" + "Upper Case: " + changeToCap;

}


// Question no 11. Write a program that takes user input. Convert and show the input in title case.

function changeTitleCase() {
    var changeToTitle = document.querySelector("#changeTitleCase").value; // in this line i have get value using querySelector and ID and assign it new variable 

    var changeToTitleCap = changeToTitle.charAt(0).toLocaleUpperCase() + changeToTitle.slice(1); // in this line i have get first character by charAt method and convert it in capital letter and then copy the other character by using slice method 

    var checked = document.querySelector(".answer11Chapter21").innerHTML = "User input: " + changeToTitle + "<br>" + "Title Case: " + changeToTitleCap; // this line show result in html page
}


// Question no 12. Write a program that converts the variable num to string.
// var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var numToBeChange = 35.36; // declare a number variable 
var numChange = numToBeChange.toString(); // in this line number variable into string variable 
var numChanged = numChange.slice(0, 2) + numChange.slice(3); // in this line i have copy first tow and last tow character for removing dot
document.querySelector('.answer12Chapter21').innerHTML = 'Number: ' + numToBeChange + '<br>' + 'Result: ' + numChanged;


// question no 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



function changeSpecialCharacter() {    // in this line declare a funtion
    var changeSpecialCharacter = document.querySelector('#changeSpecialCharacter').value  // in this line get value form html page by id

    var specialCharacterCodes = [33, 44, 46, 64]; // in this line use array for store code number of special characters

    for (var i = 0; i < changeSpecialCharacter.length; i++) { // for loop for check each alphabets 


        var asciiCode = changeSpecialCharacter.charCodeAt(i); // in this line covert alphabet in ASCII (American Standard Code for Information Interchange). in charCodeAt(i) i use for convert each alphabet

        for (var j = 0; j < specialCharacterCodes.length; j++) { // nested loop for comparing ASCII to Special character ASCII

            if (specialCharacterCodes[j] === asciiCode) { // if user input equal to 33, 44, 46, 64 code function if statement run
                alert('please enter valid user name');
                return; // if alert show this line will stop code to more run
            }

        }

    }
    alert('Welcome ' + changeSpecialCharacter); // if user input have not any special character this alert show on screen
}



// Question no 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


function userSearch() { // Function for user search 
    var bakeryArrays = ['cake', 'apple pie', 'cookie', 'chips', 'patties'] // array for we have item 

    var userInput = document.querySelector('#userSearch').value // this line get value of user input

    userInput = userInput.toLowerCase();   // convert user input to lower case for case sensitive

    for (var i = 0; i < bakeryArrays.length; i++) {  // loop for check each value of array

        if (userInput === bakeryArrays[i]) {   // if statement for check user input equal to our array or not 

            var checkedValue = bakeryArrays[i];   // if user input equal to our array`s value it will store in new variable 

            document.querySelector('.answer14Chapter21').innerHTML = checkedValue + " is available " + "At index no: " + i; // this line show result in html page
            return;   // for break loop 
        } else {

            document.querySelector('.answer14Chapter21').innerHTML = userInput + " not found " // if user input is not equal to our array value this line will show to user

        }

    }

}



// Question no 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

function password() {
    var userPassword = document.querySelector('#password').value;
    var newPassword = '';

    for (var i = 0; i < userPassword.length; i++) {
        var charCode = userPassword.charCodeAt(i);

        // Check if the character is a letter (a-z or A-Z) or a number (0-9)
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) || (charCode >= 48 && charCode <= 57)) {
            newPassword += userPassword[i];
        }
    }

    // Check the length and the first character
    if (newPassword.length >= 6 && isNaN(parseInt(newPassword[0]))) {
        document.querySelector(".answer15Chapter21").innerHTML = ('Your password is valid');
    } else {
        document.querySelector(".answer15Chapter21").innerHTML = "Your password is not valid";
    }
}




// Question no 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = "University of karachi";

university = university.split(" ");
var checkUn = typeof (university);

var universityArray = [];

for (var i = 0; i < university.length; i++) {
    var universityArrayCheck = university[i];

    for (var j = 0; j < universityArrayCheck.length; j++) {
        universityArray += universityArrayCheck[j] + "<br>"
    }
}
document.querySelector(".answer16Chapter21").innerHTML = universityArray;



// Question no 17. Write a program to display the last character of a user input.



function lastCharacter() { // declare a function 
    var userInputForLastChar = document.querySelector('#lastCharacter').value; // get user input for html page

    var lastChar = userInputForLastChar.charAt(userInputForLastChar.length - 1); // get last character using chatAt(-1) formula
    document.querySelector('.answer17Chapter21').innerHTML = 'User input: ' + userInputForLastChar + "<br>" + "Last character; " + lastChar; // display result in html page
}



// Question no 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 

function positiveNumber() { // declare a function 
    var userNumber = document.querySelector('#floorNumber').value; // take user input by query selector 

    var userNumberRound = Math.round(userNumber); // round up user input number by math.round() method 

    var userNumberFloor = Math.floor(userNumber); // floor up user input number by math.floor () method 

    var userNumberCeil = Math.ceil(userNumber);   // ceil up user input number by math.ceil() method

    document.querySelector('.answer1Chapter26').innerHTML = 'Number: ' + userNumber + '<br>' + 'Round of value: ' + userNumberRound + "<br>" + "Floor value: " + userNumberFloor + "<br>" + "Ceil value: " + userNumberCeil; // show result in html page

}



// Question no 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number




function negativeNumber() { // declare a function 
    var userNumber2 = document.querySelector('#negativeNumber').value; // take user input by query selector 

    var negativeNumberRound = Math.round(userNumber2); // round up user input number by math.round() method 

    var negativeNumberFloor = Math.floor(userNumber2); // floor up user input number by math.floor () method 

    var negativeNumberCeil = Math.ceil(userNumber2);   // ceil up user input number by math.ceil() method

    document.querySelector('.answer2Chapter26').innerHTML = 'Number: ' + userNumber2 + '<br>' + 'Round of value: ' + negativeNumberRound + "<br>" + "Floor value: " + negativeNumberFloor + "<br>" + "Ceil value: " + negativeNumberCeil; // show result in html page

}


// Question no 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

function absoluteNumber() {
    var absNumber = document.querySelector('#absoluteNumber').value;
    var absNumberValue = Math.abs(absNumber); // abs method gave us absolute value like -4 to 4
    document.querySelector('.answer3Chapter26').innerHTML = "Absolute value of " + absNumber + " " + "is " + absNumberValue;
}


// var checkPowMethod = Math.pow(4,2); it will returns the value of x to the power of y:   



// question no 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser.:

function diceRandom() {
    var diceArray = [1, 2, 3, 4, 5, 6,];  // declare a number array 

    var diceRandom = Math.random(diceArray) * 7; // get random number from array but i will return point like (.0007) number when we multiply it with 7 it wii return 0 to 6 number but still in point like(6.001)  
    diceRandom = Math.floor(diceRandom)  // in this line we floor down number like 6.0005 to 6 
    document.querySelector('.answer4Chapter26').innerHTML = diceRandom; // show result in html page
}


// Question no 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser


function coinRandom() {
    var coinArray = [1, 2, 3, 4, 5, 6,];  // declare a number array 

    var coinRandom = Math.random(coinArray) * 3; // get random number from array but i will return point like (.0007) number when we multiply it with 7 it wii return 0 to 6 number but still in point like(6.001)  
    coinRandom = Math.floor(coinRandom)  // in this line we floor down number like 6.0005 to 6 
    
    if (coinRandom === 2 ){
        document.querySelector('.answer5Chapter26').innerHTML = "Randon coin value: Head"; // show result in html page
    }else {
        document.querySelector('.answer5Chapter26').innerHTML = "Random coin valu: Tails"; // show result in html page
    }
}



// Question no 6. Write a program that shows a random number between 1 and 100 in your browser.



function randomNumber() {
    var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];  // declare a number array 

    var random100 = Math.random(randomArray) * 100; // get random number from array but i will return point like (.0007) number when we multiply it with 7 it wii return 0 to 6 number but still in point like(6.001)  
    random100 = Math.ceil(random100)  // in this line we floor down number like 6.0005 to 6 
    
    document.querySelector('.answer6Chapter26').innerHTML = "Random number between 1 to 100: " + random100; // show result in html page

  
}






function getUserWeight() {
    function parseWeight(input) {
      const cleanedInput = input.replace(/[^\d.]/g, ''); // Remove non-numeric characters
      const numericValue = parseFloat(cleanedInput); // Convert the cleaned string to a number
      return isNaN(numericValue) ? null : numericValue; // Check if it's a valid number
    }
  
    const userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
  
    // Parse the user input using the nested function
    const weight = parseWeight(userInput); // The `input` argument is here
  
    if (weight !== null) {
      alert("Your weight is: " + weight + " kilograms");
    } else {
      alert("Invalid input. Please enter a valid weight.");
    }
  }
  
  // Call the function to start the program
  getUserWeight();
  

