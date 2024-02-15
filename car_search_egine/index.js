
var carShowRoom = {
    "Toyota": {
        toyotaRush: {
            brandName: "Toyota Rush",
            engine: "1496 cc",
            model: "2024",
            price: "PKR 83.3 lacs",
            img : "./images/rush.jpg"
        },
        toyota_Corolla_Cross: {
            brandName: "Toyota Corolla Cross",
            engine: "1798 cc",
            model: "2024",
            price: "PKR 98.5 lacs",
            img : "./images/corolla.jpg"
        },
        toyota_Hilux: {
            brandName: "Toyota Hilux",
            engine: "2755 cc",
            model: "2024",
            price: "PKR 1.54 crore",
            img : "./images/Revo_-_PNG.png"
        },
        toyota_Fortuner: {
            brandName: "Toyota Fortuner",
            engine: "2755 cc",
            model: "2024",
            price: "PKR 1.99 crore",
            img : "./images/Fortuner_-_PNG.png"
        }
    },
    "Suzuki": {
        suzuki_Alto: {
            brandName: "Suzuki Alto",
            engine: "658 cc",
            model: "2024",
            price: "PKR 29.4 lacs",
            img : "./images/Suzuki_Alto_-_PNG.png"
        },
        suzuki_Cultus: {
            brandName: "Suzuki Cultus",
            engine: "998 cc",
            model: "2024",
            price: "PKR 43.7 lacs ",
            img : "./images/Suzuki_Cultus_-_PNG.png"
        },
        suzuki_Wagon: {
            brandName: "Suzuki Wagon",
            engine: "998 cc",
            model: "2024",
            price: "PKR 37.4 lacs",
            img : "./images/Wagon-R.jpg"
        },
        suzuki_Swift: {
            brandName: "Suzuki Swift",
            engine: "1200 cc",
            model: "2024",
            price: "PKR 50.4 lacs",
            img : "./images/SWIFT.jpg"
        }
    },
    "Honda": {
        honda_City: {
            brandName: "Honda City",
            engine: "1199 cc to 1497 cc",
            model: "2024",
            price: "PKR 58.5 lacs",
            img : "./images/Honda_City_Front.jpg"
        },
        honda_BRV: {
            brandName: "Honda BRV",
            engine: "1497 cc",
            model: "2024",
            price: "PKR 63.0 lacs",
            img : "./images/Honda_BRV_Front.jpg"
        },
        honda_HR_V: {
            brandName: "Honda HR-V",
            engine: "1498 cc",
            model: "2024",
            price: "PKR 76.5 - 79.0 lacs",
            img : "./images/honda HR-V2024.jpg"
        },
        honda_Civic: {
            brandName: "Honda Civic",
            engine: "1498 cc",
            model: "2024",
            price: "PKR 83.3 - 99.0 lacs",
            img : "./images/honda Civic 2024.jpg"
        }
    }
}

// get element from select dropdown 1st
var selectCompany = document.getElementById("carsCompany");
// get element from select dropdown 2nd
var selectCar = document.getElementById("carsType");


// for in loop for store first keys in first dropdown
for (var key in carShowRoom) {
    selectCompany.innerHTML += `<option value="${key}">${key}</option>`;
}

// add a event listener "change" on first dropdown for get value when change in first dropdown
selectCompany.addEventListener('change', function() {
    var selectedCompany = this.value;
    // Populate the second dropdown with car models based on the selected company
    for (var model in carShowRoom[selectedCompany]) {
        selectCar.innerHTML += `<option value="${model}">${carShowRoom[selectedCompany][model].brandName}</option>`;
    }
});

// Event listener for changes in the second dropdown when this function listen any change in second dropdown it will EXECUTE 
selectCar.addEventListener('change', function() {
    // whene this execute it will call updateCarInfo function
    updateCarInfo();
});

// updateCarInfo function for show searched car 
function updateCarInfo() {
    // first we will get first dropdown value 
    var selectedCompany = selectCompany.value;
    // now we will get second dropdown value
    var selectedCar = selectCar.value;
   // in if statement if selectedCar found then it will execute 
    if (selectedCar) {
        // when it execute it will stor car name from object
        var car = carShowRoom[selectedCompany][selectedCar];

        // now we will show result in our html page using template string 
        carInfoContainer.innerHTML = `
            <div class="card">
            <img src="${car.img}" alt="${car.brandName}">
                <h2>${car.brandName}</h2>
                <p>Engine: ${car.engine}</p>
                <p>Model: ${car.model}</p>
                <p>Price: ${car.price}</p>
                
            </div>`;
    } else {
        carInfoContainer.innerHTML = ""; // Clear the container if no car is selected
    }
}




document.addEventListener("DOMContentLoaded", function() {
    // Function to generate cards for all cars
    function generateAllCarCards() {
        var allCards = '';
        for (var company in carShowRoom) {
            for (var car in carShowRoom[company]) {
                var currentCar = carShowRoom[company][car];
                allCards += `<div class="cardAllCars">
                <h2>${currentCar.brandName}</h2>
               <p>Company: ${company}</p>
               <p>Engine: ${currentCar.engine}</p>
                <p>Model: ${currentCar.model}</p>
                <p>Price: ${currentCar.price}</p>
               <img src="${currentCar.img}" alt="${currentCar.brandName}">
                </div>`;
                
            }
        }
        return allCards;
    }

    // Display all car cards on page load
    var carInfoContainerAll = document.getElementById("carInfoContainerAll");
    carInfoContainerAll.innerHTML = generateAllCarCards();
});

 

