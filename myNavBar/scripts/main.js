/* SIDEBAR STUFF */
/*This code drags/moves the sidebar out onto the page. */
let menuOpen = false;
function toggleSidebar() {
    let menu = document.getElementById("sidebarMenu");
    let menuButton = document.getElementById("buttonToggleSidebar")

    if (menuOpen == true){
        menuButton.innerHTML = "&#9776; Sidebar"
        menuOpen = false;
        menu.style.width = "0px"
    } else {
        menuButton.innerHTML = "&#9776; Close"
        menuOpen = true;
        menu.style.width = "360px"
    }
  }