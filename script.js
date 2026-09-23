alert("hello");
let pets=[
     {name:"Tommy", 
    breed:"labrador",
     age:"2 years", 
     description:"friendly and active dog",
image:"tommy.jpg",
gender:"male",
health:"healthy"
     },
{name:"luna", 
breed:"Perisan cat", 
 age:"1 years",
 description:"friendly and naugthy",
image:"luna.jpg",
gender:"female",
health:"healthy"
},
{name:"Jenny",
 breed:"German Shepherd",
 age:"2 years",
 description:"decent and cute",
image:"jenny.jpg",
gender:"female",
health:"healthy"

}
];
window.onload = function(){
showPets(pets);
}
function showPets(petList){
    let html = "";
    petList.forEach(pet=>{
        html += `<div class="pet-card">
        <h4> ${pet.name}</h4>
        <p>Breed: ${pet.breed}</p>
 <p>description: ${pet.description}</p>
<h3>Image: ${pet.image}</h3>
<p>Gender: ${pet.gender}</p>
<p>Health: ${pet.health}</p>
        <button onclick="adoptPet('${pet.name}')">Adopt me </button></div>`;
    });
document.getElementById("petList").innerHTML=html;
    }
function searchPet(){
let text =document.getElementById("search").value.toLowerCase();
let filtered=pets.filter(pet =>
    pet.name.toLowerCase().includes(text)||
    pet.breed.toLowerCase().includes(text)
);
showPets(filtered);
 }
function adoptPet(petname){
window.location.href = "adoption.html?pet=" +encodeURIComponent(petname);}
function givesection(){
document.getElementById("adopt-section").style.display ="none";
document.getElementById("give-section").style.display ="block";
    }
function showAdopt(){
document.getElementById("adopt-section").style.display ="block";
document.getElementById("give-section").style.display ="none";
}
function showGive() {
    document.getElementById("adopt-section").style.display = "none";
    document.getElementById("give-section").style.display = "block";
}

function submitPet() {
    let name = document.getElementById("petName").value;
    let breed = document.getElementById("petBreed").value;
    let age = document.getElementById("petAge").value;
let description = document.getElementById("petDescription").value;
let image = document.getElementById("petImage").value;
let gender = document.getElementById("petGender").value;
let health = document.getElementById("petHealth").value;
    if (name === "" || breed === "" ||  age === "" || description === "" || image === "" || gender === "" || health === "" ) {
        alert("Please fill all fields!");
        return;
    }

    alert(
        "Pet submitted successfully!\n" +
        "Name: " + name + "\n" +
        "Breed: " + breed + "\n" +
        "Age: " + age + "\n" +
     "Description:" + description +"\n"+
     "Image: " + image + "\n" +
     "Gender: " + gender + "\n" +
     "Health: " + health 
    );}
