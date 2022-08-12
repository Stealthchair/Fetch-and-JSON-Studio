// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const addAstronauts = document.getElementById("container");
            let newAstronaut;
            for(let i = 0; i < response.length; i++){
                console.log("Hello");
                newAstronaut = document.createElement("div");
                newAstronaut.setAttribute("class", "astronaut");
                newAstronaut.innerHTML = response[i].firstname;
                addAstronauts.appendChild(newAstronaut);
            }
        });
    });
});