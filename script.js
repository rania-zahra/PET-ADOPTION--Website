alert("hello");
let pets=[
     {name:"Tommy", breed:"labrador", age:"2 years"},
{name:"luna", breed:"Perisan cat",  age:"1 years"},
{name:"Jenny", breed:"German Shepherd", age:"2 years"}
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
        <p>Age: ${pet.age}</p>
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
alert("you want to adopt :"    +   petname   +   "! Admin will ; contact you soon");}
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

    if (name === "" || breed === "" || age === "") {
        alert("Please fill all fields!");
        return;
    }

    alert(
        "Pet submitted successfully!\n" +
        "Name: " + name + "\n" +
        "Breed: " + breed + "\n" +
        "Age: " + age
    );}
