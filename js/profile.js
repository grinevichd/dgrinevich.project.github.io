let profileElement = document.querySelector(".perm")
let cancel = document.querySelector(".cancel-perm")
let menu = document.querySelector('.perm-munu')
function openProfile(){
    menu.classList.toggle('perm-menu-open')
}
profileElement.addEventListener("click",openProfile)

cancel.addEventListener("click",function(e){
    menu.classList.remove('perm-menu-open')

})


let bagElement = document.querySelector(".bag")
let bagMenu = document.querySelector(".bag-menu")
let bagMenuClose = document.querySelector(".close-bag-menu")

function openBag(){
    
    bagMenu.classList.add("bag-menu-open")
}
bagElement.addEventListener("click", openBag)

bagMenuClose.addEventListener("click", function(e){
    bagMenu.classList.remove("bag-menu-open")
    
})