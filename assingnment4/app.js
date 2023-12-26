
//      Questin No 1

var arrMulti = [ [ [] ]]
document.querySelector('.answer1').innerHTML = arrMulti;

//    Questin No 2

var multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

console.log( multiArray);


//var counter = document.querySelector('.answer2').innerText =  multiArray;

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
1


var countingArrays = [1,2,3,4,5,6,7,8,9,10];

var displayCountingArrays = document.querySelector('.answer3');



for (let i = 1; i <= 10; i++) {
    var displayCountingArrays = document.querySelector('.answer3').innerHTML=(i);
}