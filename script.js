
    let button = document.querySelector("#btn");
    let reset = document.querySelector('#reset');
 
    // Function for calculating BMI
    button.addEventListener("click", getbmi);
    reset.addEventListener("click", resetvalue);



function getbmi(){
   
    let height = parseInt(document.querySelector("#height").value);
let weight = parseInt(document.querySelector("#weight").value);

let result = document.querySelector(".ans");

if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
 
else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";

    else
    {
        let bmi = (weight/(height*height)).toFixed(2);

        result.innerHTML = bmi;
    }

}

function resetvalue(){

    document.querySelector('#height').value = "";
    document.querySelector('#weight').value = "";

    document.querySelector('.ans').innerHTML = "";



    
}

