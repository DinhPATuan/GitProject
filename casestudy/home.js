// Slider menu
let index = 0
const imgNum = document.querySelectorAll(".slider-top img")
const rbtn = document.querySelector('.fa-chevron-right');
const lbtn = document.querySelector('.fa-chevron-left');
rbtn.addEventListener("click",function(){
    index = index + 1
    if (index > imgNum.length - 1){
        index = 0
    }
    document.querySelector(".slider-top").style.right = index * 100 + "%"
})
lbtn.addEventListener("click",function(){
    index = index -1
    if (index < 0){
        index = imgNum.length-1
    }
    document.querySelector(".slider-top").style.right = index * 100 + "%"
})
const imgNumLi = document.querySelectorAll(".slider-bottom li")
imgNumLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        rmactive()
        document.querySelector(".slider-top").style.right = index * 100 + "%"       
        image.classList.add("active")
    })
})
function rmactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
function sliderAuto(){
    index = index +1
    if (index > imgNum.length - 1){
        index = 0
    }
    rmactive()
    document.querySelector(".slider-top").style.right = index * 100 + "%"
    imgNumLi[index].classList.add("active")    
}
setInterval(sliderAuto,5000);

// Product
function changeProductList(type, element){
    let tabs = document.getElementsByClassName('tab-item');
    for (i=0; i< tabs.length; i++){
        tabs[i].style.background = '#ffffff';
        tabs[i].style.color= '#ff0000';
        tabs[i].style.border = '1px solid #000000';
    }
    element.style.background = '#ff0000';
    element.style.color= '#ffffff';
    element.style.border = '1px solid #ff0000';

    document.getElementById(type).style.display = 'block';
    document.getElementById(type).style.display = 'flex';
    switch (type) {
        case 'new':
            document.getElementById('best-sell').style.display = 'none'
            break
        case 'best-sell':
            document.getElementById('new').style.display = 'none'
            break
    }
}
// -----------cart---------
function addToCart(btn){
    const trNode = btn.parentElement.parentElement.parentElement;
    const trNodeClone = trNode.cloneNode(true)
    const btnAdd = trNodeClone.getElementsByTagName('button')
    btnAdd[0].innerText = "Xóa";
    btnAdd[0].setAttribute("onclick", "removeCartItem(this)");
    const cartBody = document.getElementById("cart-body");
    cartBody.appendChild(trNodeClone);
    const cartTable = document.getElementById("cartItems");
    cartTable.style.display = "table";
    calTotal();
    document.querySelector(".cart").style.right = "0";
}
function removeCartItem(btn){
    const trNode = btn.parentElement.parentElement.parentElement;
    const tbodyNode = trNode.parentElement;
    tbodyNode.removeChild(trNode);
    if(tbodyNode.children.length<=0){
        const cartTable = document.getElementById("cartItems");
        cartTable.style.display = "none";
    }
    calTotal();
}
function calTotal(){
    const cartItemsTable = document.getElementById("cart-body");
    const amountSpans = cartItemsTable.getElementsByClassName("amount");
    let total = 0;
    for(const element of amountSpans){
        total += Number(element.innerText);
    }
    const totalSpan = document.getElementById("total");
    totalSpan.innerText = total
}
const cartshow = document.querySelector(".btnshowcart");
const cartclose = document.querySelector(".fa-xmark");
cartshow.addEventListener('click',function(){
    document.querySelector(".cart").style.right = "0";
})
cartclose.addEventListener('click',function(){
    document.querySelector(".cart").style.right = "-100%";
})
// ---------search-------------
function search(){
    var searchInput, filter, ul, li, a, i, txtValue;
    searchInput = document.getElementById("searchProduct");
    filter = searchInput.value.toUpperCase();
    ul = document.getElementById('new');
    li = ul.getElementsByTagName('li');
    for ( i = 0;i<li.length;i++){
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        } else{
            li[i].style.display = "none";
        }
    }
}