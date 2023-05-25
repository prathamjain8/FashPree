// Main page hamburger menu
let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar')
if (bar) {
    bar.addEventListener('click', ()=>
    {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', ()=>
    {
        nav.classList.remove('active')
    })
}


// products page
var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-image");
    smallImg[0].onclick = function() {
        mainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        mainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        mainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        mainImg.src = smallImg[3].src;
    }