let buttonSale = document.querySelector('.sale')
let buttonSaleMenu = document.querySelector('.header-bottom-container-menu')



buttonSale.addEventListener("click",function(e){
    buttonSaleMenu.classList.toggle("buttonSaleMenu-open")
    buttonSaleMenu.style.zIndex = 10
})



buttonSaleMenu.addEventListener("mouseleave", function(e){
    buttonSaleMenu.classList.remove("buttonSaleMenu-open")
    buttonSaleMenu.style.zIndex = 0

})