
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


var maxNumber =[24, 53, 78, 91, 12];
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

var minNumbers =[24, 53, 78, 91, 12];
document.querySelector(".minNumber").innerHTML = `Array items: ` + minNumbers;

 var minFound =(Math.min.apply(null, minNumbers));
 document.querySelector(".foundMinNumber").innerHTML = `The smallest number is: ` + minFound;


//  Question no 10. Write a program to print multiples of 5 ranging 1 to 100.

var ranging = '';


for (var i = 5; i <= 100; i++){
    if(i % 5 == 0 ){
       
        ranging+=(i)+ ","
    }
}
ranging.split(' '),

document.querySelector('.maxNumberBy5').innerHTML = ranging;



// chapter No 21 to 25 

// Question no 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
function checkAnswer(){
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