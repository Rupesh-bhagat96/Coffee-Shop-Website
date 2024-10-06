const menuBtn=document.querySelector(".menu-icon")
const navBar=document.querySelector(".navbar")
const inputSearch=document.querySelector(".header .searchinputs")
const searchBtn=document.querySelector(".search-icon")
const cartBtn=document.querySelector(".cart-icon")
const cartContainer=document.querySelector(".header .cartitems")



menuBtn.addEventListener('click',()=>{
    navBar.classList.toggle("active") 
    inputSearch.classList.remove("active") 
    cartContainer.classList.remove("active")

})
navBar.addEventListener('click',()=>{
    navBar.classList.remove("active") 
})

searchBtn.addEventListener('click',()=>{
    inputSearch.classList.toggle("active")
    navBar.classList.remove("active") 
    cartContainer.classList.remove("active")
    
})
cartBtn.addEventListener('click',()=>{
    cartContainer.classList.toggle("active")
    navBar.classList.remove("active") 
    inputSearch.classList.remove("active") 
    
})