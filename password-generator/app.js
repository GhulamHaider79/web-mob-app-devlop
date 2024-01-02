var alphabetSmalLetter = ("abcdfghijklmnopqrstuvwxyz");
var alphabetCapLetter = ("ABCDEFGHIJKLMNOPQRSTUVXYZ");
var num = '0123456789';
var specialCharacter = "!@#$%^&*()_+-=[]{}|;:,./<>?"


// var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log(randomLetter);

function navbarChange () {
  var navbar = document.querySelector('#navbar');
  var scrollValue = window.scrollY;
  console.log(scrollValue);

  if (scrollValue < 5){
   navbar.classList.remove('navbar-after');
  } else{
    navbar.classList.add('navbar-after');
  }
}
window.addEventListener('scroll', navbarChange )


// function for password generator
var password = "";

function submit() {

  for (var i = 0; i < 4; i++) {


    password = alphabetCapLetter[Math.floor(Math.random() * alphabetCapLetter.length)];
    password += alphabetSmalLetter[Math.floor(Math.random() * alphabetSmalLetter.length)];
    password += alphabetCapLetter[Math.floor(Math.random() * alphabetCapLetter.length)];
    password += alphabetSmalLetter[Math.floor(Math.random() * alphabetSmalLetter.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    password += alphabetSmalLetter[Math.floor(Math.random() * alphabetSmalLetter.length)];
  }
  document.getElementById('showPasswordLast').innerHTML = password;
  // console.log(password);
}


// function for copy to clipboard

function copyToClipboard() {

  var copyText = document.getElementById("showPasswordLast");
  var range = document.createRange();
  range.selectNode(copyText);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();


  alert("Text copied to clipboard: " + copyText.innerText);


  console.log(copyText.innerText);
}







