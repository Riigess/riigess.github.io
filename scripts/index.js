function changeImage() {
    if(document.getElementById('btnSwitch').src == "https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/moon-icon.png") {
        document.getElementById('btnSwitch').src = "https://cdn.icon-icons.com/icons2/2070/PNG/512/moon_icon_125979.png";
        document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
        document.getElementById('btnSwitch').src = "https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/moon-icon.png";
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
}

function adjustNavbarWidth() {
    let navbar = document.getElementsByClassName("roundedbottom")[0];
    console.log(navbar.offsetWidth);
}

adjustNavbarWidth();