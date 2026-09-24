
let pets=[
     {name:"Tommy", 
    breed:"labrador",
     age:"2 years", 
     description:"friendly and active dog",
image:"./image/tommy.jpg",
gender:"male",
health:"healthy"
     },
{name:"luna", 
breed:"Perisan cat", 
 age:"1 years",
 description:"friendly and naugthy",
image:"./image/luna.jpg",
gender:"female",
health:"healthy"
},
{name:"Jenny",
 breed:"German Shepherd",
 age:"1 years",
 description:"decent and cute",
image:"./image/jenny.jpg",
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
        <p>Age: ${pet.age}</p>
 <p>description: ${pet.description}</p>
<img src= "${pet.image}" style="width:100%; height:150px;">
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
let image = document.getElementById("petImage").files[0];
let gender = document.getElementById("petGender").value;
let health = document.getElementById("petHealth").value;
    if (name === "" || breed === "" ||  age === "" || description === "" ||  gender === "" || health === "" ) {
        alert("Please fill all fields!");
        return;
    }
    if (!imagefile) {
        alert("Please select an image from your gallery.");
        return;
    }
    let ageNumber = Number(age);
    if (isNaN(ageNumber) || ageNumber < 0 || ageNumber > 5) {
        alert("Please enter a valid age between 0 and 5.");
        return;
    }
    let reader = new FileReader();
    reader.onload = function(e) {
        let imageDataUrl = e.target.result;
    alert(
    "Pet submitted successfully!\n" +
    "Name: " + name + "\n" +
    "Breed: " + breed + "\n" +
    "Age: " + age + "\n" +
 "Description:" + description +"\n"+
     "Image: " + imageDataUrl + "\n" +
     "Gender: " + gender + "\n" +
     "Health: " + health 
    );}
let newPet={
    name: name,
    breed: breed,
    age: age,
    description: description,
    image: image,
    gender: gender,
    health: health
}
pets.push(newPet);
document.getElementById("petName").value = "";
document.getElementById("petBreed").value = "";
document.getElementById("petAge").value = "";
document.getElementById("petDescription").value = "";
document.getElementById("petImage").value = "";
document.getElementById("petGender").value = "";
document.getElementById("petHealth").value = "";

document.getElementById("adopt-section").style.display = "block";
document.getElementById("give-section").style.display = "none";
}
showPets(pets);
reader.readAsDataURL(image);