// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);

            // Below: the hard way
            /*const addAstronauts = document.getElementById("container");
            let newAstronautContainer;
            let newBioContainer;
            let astronautName;
            let list;
            let listItem;
            let astronautImage;
            for(let i = 0; i < json.length; i++){
                console.log("Hello");
                //Create Astronaut divison
                newAstronautContainer = document.createElement("div");
                newAstronautContainer.setAttribute("class", "astronaut");

                //Creat Bio divison
                newBioContainer = document.createElement("div");
                newBioContainer.setAttribute("class", "bio");

                //Create Astronaught Name and add to Bio divison
                astronautName = document.createElement("h3")
                astronautName.innerHTML = json[i].firstName + " " + json[i].lastName;
                newBioContainer.appendChild(astronautName);

                //Create list and add to Bio division
                list = document.createElement("ul");

                listItem = document.createElement("li");
                listItem.innerHTML = "Hours in Space: " + json[i].hoursInSpace;
                list.appendChild(listItem);

                listItem = document.createElement("li");
                listItem.innerHTML = "Active: " + json[i].active;
                list.appendChild(listItem);

                listItem = document.createElement("li");
                listItem.innerHTML = "Skills: " + json[i].skills;
                list.appendChild(listItem);

                newBioContainer.appendChild(list);

                //Add Bio division to Astronaut division
                newAstronautContainer.appendChild(newBioContainer);

                //Create img and add to Astronaut division
                astronautImage = document.createElement("img");
                astronautImage.setAttribute("class", "avatar");
                astronautImage.setAttribute("src", json[i].picture);
                newAstronautContainer.appendChild(astronautImage);

                //Add astronaut division to Container         
                addAstronauts.appendChild(newAstronautContainer);
            }*/

            let container;

            //selectionSort(json);

            let maxHours;
            let maxId;
            container = document.getElementById("container");
            const staticLength = json.length;
            for(let i = 0; i < staticLength; i++){
                maxHours = json[0].hoursInSpace;
                maxId = 0;              
                for(let j = 0; j < json.length; j++){
                    if(json[j].hoursInSpace > maxHours){
                        maxHours = json[j].hoursInSpace;
                        maxId = j;
                    }
                }
                container.innerHTML += `<div class="astronaut">
                        <div class="bio">
                            <h3>${json[maxId].firstName + " " + json[maxId].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[maxId].hoursInSpace}</li>
                                <li>Active: ${json[maxId].active}</li>
                                <li>Skills: ${json[maxId].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[maxId].picture}">
                    </div>`;
                    console.log(maxId);
                json.splice(maxId, 1);
                console.log(json);
            }


            for(let i = 0; i < json.length; i++){
                container = document.getElementById("container");
                container.innerHTML += `<div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>`;
            }


        });
    });
});

//thank you Tom
function findMinIdx(arr) {
    // return the index of the smallest value in arr
    let minIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hoursInSpace < arr[minIdx].hoursInSpace) {
        minIdx = i;
      }
    }
    return minIdx; // this will have the index of\\
                   // smallest value in arr
  }
  
function selectionSort(arr) {
    // sort arr into sorted and return sorted
    let sorted = [];
    while (arr.length > 0) {
      // find index of minimum value
      let i = findMinIdx(arr);
      // add that value to sorted
      sorted.push(i);
      // remove that value from arr
      // arr.splice(i, 1);  // this is destructive
      
      arr = arr.splice(0, i).concat(arr.slice(i + 1)); // this is non-destructive
      console.log(arr);
    }
    return sorted;
  }