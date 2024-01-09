var calculate = ''; // declare a variable

var displayValue = "";  // declare a variable


// function for calculator 
function button(value) {

    displayValue += value; // value of button store in variable 

    // if statement for condition checking
    if (value === '=') {
        calculate = eval(calculate);  // if value is equal to = sign these line of code will run 
        upDateDisplayValue()  // this is another function for display first input value to show in next input 

    } else if (value === 'del') {    // if value equal to del these line of code will run

        calculate = calculate.toString().slice(0, -1); // in this line .toString method change to string and slice method will delete lase digit


        displayValue = '';  // in this line second input will clear  

        upDateDisplayValue() // this is another function for display first input value to show in next input 

    } else if (value === 'c') { // if these line of code run


        calculate = calculate.toString().slice(0, -1); // in this line .toString method change to string and slice method will delete lase digit


        displayValue = '';  // in this line second input will clear  

        upDateDisplayValue()  // this is another function for display first input value to show in next input 

    } else if (value === 'ce') { // if this condition match 
        
        calculate = '';  // whole input will empty

        displayValue = '';  // whole input will empty

        upDateDisplayValue()  // function call
    } else {
        calculate += value;  // this line will stor value every clicks on buttons
        
    }

    upDateDisplay(); // function call
}


/// function for show value in input
function upDateDisplay() {  // function and function name declare

    var displayElement = document.getElementById('display'); // get element from html page and store in variable

    // if statement for check element fount or not fund which one we get before line
    if (displayElement) {   
        displayElement.value = calculate; // if element found then its value update by calculate variable 
    } else {
        console.error('Display element not found');
    }

}


// function for second input for move equation to in this variable and show result in first variable
function upDateDisplayValue() {
    var displayElementValue = document.getElementById('input_first');
    if (displayElementValue) {
        displayElementValue.value = displayValue;
    } else {
        console.error('Display element not found');
    }
}

