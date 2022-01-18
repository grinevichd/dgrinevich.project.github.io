let sideMenu = document.querySelector(".top-header-left-menu")
let sideMenuCancel = document.querySelector(".side-bar-cancel")
let sideBar = document.querySelector('.side-bar-menu')


function openSideBar(){
    sideBar.classList.add("side-bar-position")
    sideMenuCancel.style.display="block"
    document.body.style.overflow = "hidden"
    
}
sideMenu.addEventListener("click", openSideBar)

function closeSideBar(){
    sideBar.classList.remove("side-bar-position")
    sideMenuCancel.style.display="none"
    document.body.style.overflow = "auto"

}
sideMenuCancel.addEventListener("click", closeSideBar)