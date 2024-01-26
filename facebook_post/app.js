function setImage(){
    let writePost = document.querySelector('#writePost');
    console.log(writePost);
    writePost.style.backgroundImage = 'url(' + event.target.src + ')'
   

    console.log(event.target.src)
}

function openColor(){
    let writePost = document.querySelector('#writePost');
    writePost.style.color = event.target.value
    console.log(event.target.value);
}
function showEmojis(){
    let showEmojis =  document.querySelector('.emojis2');
    console.log(showEmojis)
    showEmojis.classList.add('emojis');

    showEmojis.addEventListener('mouseleave', function() {
        showEmojis.classList.remove('emojis');
    });
}


document.querySelector('.emojis2').addEventListener('click',function (e){
    let writePost = document.querySelector('#writePost').innerHTML += e.target.value
   
    console.log(writePost)
   
    console.log(e.target.value);
})