$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    dots:false,
    center: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
//  navbar
let header = document.getElementById("header");
let navBar = document.getElementById("navbar")
navBar.style.top = "0px";
header.style.top = "50px";
let prevScroll = window.pageYOffset;
window.onscroll = function() {
let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("header").style.top = "50px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("header").style.top = "0px";
  }
  prevScroll = currentScroll;
}

// allmedia
function pic(){
    document.getElementById("showpic").style.display = "block";
    document.getElementById("showvideo").style.display = "none";
    document.getElementById("pic").style.color = "#E86929";
    document.getElementById("video").style.color = "black";
    document.getElementById("pic").style.textDecoration = "underline";
    document.getElementById("video").style.textDecoration = "none";
}
function vid(){
    document.getElementById("showpic").style.display = "none";
    document.getElementById("showvideo").style.display = "block";
    document.getElementById("pic").style.color = "black";
    document.getElementById("video").style.color = "#E86929";
    document.getElementById("video").style.textDecoration = "underline";
    document.getElementById("pic").style.textDecoration = "none";
}

// modal pic
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}