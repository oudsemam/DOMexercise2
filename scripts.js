(function(){
    const navIcon = document.querySelector("button");
    const nav = document.getElementById("nav-bar");
    const links = document.querySelectorAll('a');
    let show = true;

    function showNavBar(event) { 
        if(nav.classList.contains("hide")){
            nav.classList.remove("hide");
            nav.classList.add("show");

        } else {
            nav.classList.remove("show");
            nav.classList.add("hide")

        }
    }

    function hideLettersOrNumbers (event) {
        event.preventDefault();
        let letters = document.getElementById("letters-container");
        let numbers = document.getElementById("numbers-container");

        if (event.target.id === "letters"){
            numbers.classList.remove ("show");
            letters.classList.remove ("hide");
            numbers.classList.add("hide");
            letters.classList.add("show");
            
        } else {
            numbers.classList.remove("hide");
            letters.classList.remove("show");
            numbers.classList.add("show");
            letters.classList.add("hide");
        }
        showNavBar();
    }

    for (let link of links) {
      link.addEventListener("click", hideLettersOrNumbers);
    }

    navIcon.addEventListener('click', showNavBar);
})();