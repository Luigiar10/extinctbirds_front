function menuResponsive() {
    let menu = document.querySelector(".burger");
    menu.onclick = function () {
        let menu_nav = document.querySelector(".navigation");
        menu_nav.classList.toggle("show-navigation");
        // menu_nav.classList.remove("navigation")
        // console.log(menu_nav.classList.item(0));
    }
}


//Call Functions
menuResponsive()