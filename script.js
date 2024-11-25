const adressbtn = document.querySelector('#auth-form')
//console.log (rightbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.auth-form').style.display ="flex"
})
//slider------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("click", function(){
    document.querySelector("slider-content-left-top-container").style.right = "100%"
})