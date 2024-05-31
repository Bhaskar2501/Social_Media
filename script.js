// for dropdown
let settingsMenu = document.querySelector(".settings-menu");
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height")  // accessing css from style.css file 

}
//for the dark-light theme
let darkBtn = document.querySelector("#dark-btn");
darkBtn.onclick = function (){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if( localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

// to stay the website in the same view mode after refreshinh the page
if( localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if( localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light"); //whenever the user visit 1st time
}

function logout() {
    // Perform logout actions here, such as clearing local storage or redirecting to a logout page
    // For now, let's assume you want to redirect to the login page
    window.location.href = "login.html";
}




//creating localstorage with name of theme and value is dark for webbrowser
// localStorage.setItem("theme","dark"); 
//read the value of localstorage
// localStorage.getItem("theme");  // gives value stord in lcs i.e theme

