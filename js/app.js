//variables
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let giveBMIBtn = document.querySelector(".give-BMI");
let modalContainer = document.querySelector(".modal-container");
let modalCard = document.querySelector(".modal-container .modal");
let confirmBtn = document.querySelector(".confirm");
let BMI = "";

//event listeners
//to open modal
giveBMIBtn.addEventListener("click", displayBMI);
//to close modal
confirmBtn.addEventListener("click", closeModal);
// to reset forms after refresh
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input").forEach(element => {
        element.value = null;
    });
});

//functions
/* a function to display height, weight, situation,
BMI, healty weight range and etc on the modal card*/
function displayBMI() {
    document.querySelector(".loading").style.display = "flex";
    //display loading gif for about 1 second
    setTimeout(function() {
        document.querySelector(".loading").style.display = "none";
    }, 1500);
    //display values after the loading gif
    setTimeout(function() {
        //check the values
        if(heightInput.value != "" && weightInput.value != "") {
            //creat an instance with users entered values
            BMI = new CalculateBMI(Number(heightInput.value),
            Number(weightInput.value));
            //check calculate returned values
                if (BMI.calculate() == "your height and weight is not in range." || BMI.calculate() == "your height is not in range." || BMI.calculate() == "your weight is not in range.") {
                    document.querySelector(".infos-container").style.display = "none";
                    document.querySelector(".errorBase").style.display = "flex";
                    document.querySelector(".error").textContent = BMI.calculate();  
                    openModal();                  
                } else {
                    //display the result
                    document.querySelector(".infos-container").style.display = "block";
                    document.querySelector(".errorBase").style.display = "none";
                    document.querySelectorAll(".weight").forEach(element => {
                        element.textContent = BMI.weight + "KG";
                    });
                    document.querySelectorAll(".height").forEach(element => {
                        element.textContent = BMI.height + "CM";
                    });
                    document.querySelector(".BMI .info .number").textContent = BMI.calculate();
                    document.querySelector(".BMI .situation span").textContent = BMI.situation();
                    openModal();
                }
        } else {
            //display error
            document.querySelector(".infos-container").style.display = "none";
            document.querySelector(".errorBase").style.display = "flex";
            document.querySelector(".error").textContent = "you didnt enter anything or you entered some letters";  
            openModal();
        }
    }, 1500);
}

// open modal
function openModal() {
    modalContainer.classList.add('open');
}

// close modal
function closeModal() {
    modalContainer.classList.remove('open');
}

