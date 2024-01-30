// function to set image on background of text area it is a onclick function
function setImage(){
    // get and assign textarea dive to writePost variable 
    let writePost = document.querySelector('#writePost');
   // change assign or change the background url of textarea 
    writePost.style.backgroundImage = 'url(' + event.target.src + ')'

}

// function for set the color of text in textarea 
function openColor(){
    // get and set the text in writePostText variable
    let writePostText = document.querySelector('#writePost');
    // set the value of color in text from where is click on input color in html page
    writePostText.style.color = event.target.value
}

// function for show emojis dive
function showEmojis(){
    // get and set the emoji dive to showEmojis variable
    let showEmojis =  document.querySelector('#addEmojis');
    // display emojis div by adding class emojis
    showEmojis.classList.add('emojis');

}

// function for hide emojis div 
document.querySelector('#addEmojis').addEventListener('mouseleave', function (e){
    let hideEmojis =  document.querySelector('#addEmojis');
    hideEmojis.classList.remove('emojis');
})

// function for add emojis in text area but not works
function addEmojis (){
    let writePostEmojis = document.querySelector('#writePost')
   
    writePostEmojis = event.target.value
    // console.log(writePostEmojis);
   
    // console.log(event.target.value);
}

// function for text bold and normal
document.querySelector('.bold').addEventListener('click', function (e){
    let writePostBold = document.querySelector('#writePost')
    if (writePostBold.style.fontWeight == "bold"){
        writePostBold.style.fontWeight = "normal"
    }else{
        writePostBold.style.fontWeight = "bold"
    }
} )

// function for text italic and normal
document.querySelector('.italic').addEventListener('click', function (e){
    let writePostBold = document.querySelector('#writePost')
    if (writePostBold.style.fontStyle == "italic"){
        writePostBold.style.fontStyle = "normal"
    }else{
        writePostBold.style.fontStyle = "italic"
    }
} )

// function for text under line and normal 
document.querySelector('.under_line').addEventListener('click', function (e){
    let writePostBold = document.querySelector('#writePost')
    if(writePostBold.style.textDecoration == "underline" ){
        writePostBold.style.textDecoration = "none" 
    }else{
        writePostBold.style.textDecoration = "underline" 
    }
} )

// function for text left align
document.querySelector('.leftAlign').addEventListener('click',function (e){
    let writePost = document.querySelector('#writePost')
    writePost.style.textAlign = "left"
    // console.log(writePost)
   
    // console.log(e.target.value);
})

// function for text center align
document.querySelector(".centerAlign").addEventListener('click', function (e) {
let writeSection = document.querySelector('#writePost')
writeSection.style.textAlign = 'center'
})

// function for text right align
document.querySelector('.rightAlign').addEventListener('click', function (e){
    let writeSection = document.querySelector('#writePost')
writeSection.style.textAlign = 'right'
})


// function for button post when click all option will disappear
document.querySelector('.post_button').addEventListener('click', function (){
    
    let writePostDisable = document.querySelector('#writePost')
    writePostDisable.disabled = true;

    let boldText  = document.querySelector('.text_bold')
    boldText.style.display = 'none'

    let color_section  = document.querySelector('.color_section')
    color_section.style.display = 'none'

    let post_button = document.querySelector('.post_button')
    post_button.style.backgroundColor = 'gray'
})