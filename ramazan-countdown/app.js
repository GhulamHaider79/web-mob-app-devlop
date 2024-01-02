
function ramadanCounter() {
    var endDate = new Date("March 11, 2024 23:59:59").getTime();
var newDate = new Date().getTime();
var diffDate = endDate - newDate;


    var month = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 30));
    var day = Math.floor(diffDate % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minute = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    var second = Math.floor(diffDate % (1000 * 60) / (1000));
    var counter = document.querySelector('.month').innerText = month;
    var counter = document.querySelector('.day').innerText = day;
    var counter = document.querySelector('.hours').innerText = hours;
    var counter = document.querySelector('.minute').innerText = minute;
    var counter = document.querySelector('.second').innerText = second;
}

setInterval(ramadanCounter,1000);


ramadanCounter()
