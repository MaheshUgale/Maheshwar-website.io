let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let value;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("sticky");
        scrollBtn.style.display="block";
    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display="none";
    }
}

function showContactInfo() {
    var popup = document.getElementById("contactPopup");
    popup.classList.toggle("show");
}

// document.documentElement.scrollTop > 50 

// Please note here the 50 is pixels