let pets = [
    {
        name: "Tommy",
        breed: "labrador",
        age: "2 years",
        description: "friendly and active dog",
        image: "./image/tommy.jpg",
        gender: "male",
        health: "healthy"
    },
    {
        name: "luna",
        breed: "persian cat",
        age: "1 years",
        description: "friendly and naugthy",
        image: "./image/luna.jpg",
        gender: "female",
        health: "healthy"
    },
    {
        name: "Jenny",
        breed: "british shorthair",
        age: "1 years",
        description: "decent and cute",
        image: "./image/jenny.jpg",
        gender: "female",
        health: "healthy"
    }
];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

window.onload = function() {
    showPets(pets);
}

function showPets(petList) {
    let html = "";

    petList.forEach(pet => {
        html += `<div class="pet-card">
        <h4>${pet.name}</h4>
        <p>Breed: ${pet.breed}</p>
        <p>Age: ${pet.age}</p>
        <p>description: ${pet.description}</p>
        <img src="${pet.image}" style="width:100%; height:150px;">
        <p>Gender: ${pet.gender}</p>
        <p>Health: ${pet.health}</p>
        <button onclick="adoptPet('${pet.name}')">Adopt me</button>
        <button onclick="addFavorite('${pet.name}')">Add to Favorite</button>
        </div>`;
    });

    document.getElementById("petList").innerHTML = html;
}

function applyFilters() {
    let breed = document.getElementById("breedFilter").value;
    let gender = document.getElementById("genderFilter").value;
    let health = document.getElementById("healthFilter").value;
    let text = document.getElementById("search").value.toLowerCase();

    let filtered = pets.filter(pet => {
        let matchesBreed = breed === "" || pet.breed === breed;
        let matchesGender = gender === "" || pet.gender === gender;
        let matchesHealth = health === "" || pet.health === health;
        let matchesText = text === "" || pet.name.toLowerCase().includes(text) || pet.breed.toLowerCase().includes(text);

        return matchesBreed && matchesGender && matchesHealth && matchesText;
    });

    showPets(filtered);
}

function adoptPet(petname) {
    window.location.href =
        "adoption.html?pet=" + encodeURIComponent(petname);
}function addFavorite(petName) {

    let pet = pets.find(pet => pet.name === petName);

    if (!pet) {
        return;
    }

    let alreadyFavorite = favorites.some(
        favorite => favorite.name === petName
    );

    if (alreadyFavorite) {
        alert("This pet is already in your favorites!");
        return;
    }

    favorites.push(pet);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert(petName + " added to favorites!");
}
function showFavorites() {
    showPets(favorites);
}
function givesection() {
    document.getElementById("adopt-section").style.display = "none";
    document.getElementById("give-section").style.display = "block";
}

function showAdopt() {
    document.getElementById("adopt-section").style.display = "block";
    document.getElementById("give-section").style.display = "none";
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

    if (
        name === "" ||
        breed === "" ||
        age === "" ||
        description === "" ||
        gender === "" ||
        health === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    if (!image) {
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
            "Description:" + description + "\n" +
            "Image: " + imageDataUrl + "\n" +
            "Gender: " + gender + "\n" +
            "Health: " + health
        );

        let newPet = {
            name: name,
            breed: breed,
            age: age,
            description: description,
            image: imageDataUrl,
            gender: gender,
            health: health
        };

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

        showPets(pets);
    }

    reader.readAsDataURL(image);
}

document.getElementById("petImage").addEventListener("change", function() {
    let file = this.files[0]
        ? this.files[0].name
        : "select an image from your gallery";

    document.getElementById("imageLabel").textContent = file;
});