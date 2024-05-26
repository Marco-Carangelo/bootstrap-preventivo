'use strict'

// ****** DISCOUNT CODE ******

//Get the discount field 
const userDiscount = document.getElementById('user-discount');
console.log(userDiscount);

//Define a boolean variable for the discount result inizialized to false
let discountResult = false;

//Function for user discount code validation
discountResult = userDiscount.addEventListener('keyup', function () {

    //Define an array with all the valid discount code
    const validDiscount = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    //Transform the value of the discount field into uppercase and save it in a variable
    const upUserDiscount = userDiscount.value.toUpperCase();

    //Get the result label element from the dom
    const resultLabel = document.getElementById('discount-result')

    //Validate the input value only if is not empty
    if (upUserDiscount) {

        //If the value in the text area is included in the strings array visualize the success label
        if (validDiscount.includes(upUserDiscount)) {

            resultLabel.innerText = 'Il codice sconto inserito è valido';
            resultLabel.classList.remove('invisible', 'bg-danger-subtle', 'border-danger-subtle', 'text-danger');
            resultLabel.classList.add('bg-success-subtle', 'border-success-subtle', 'text-success');
            return true;

        } else {
            resultLabel.innerText = 'Il codice sconto inserito non è valido';
            resultLabel.classList.remove('invisible', 'bg-success-subtle', 'border-success-subtle', 'text-success');
            resultLabel.classList.add('bg-danger-subtle', 'border-danger-subtle', 'text-danger');
            return false;
        }

    }
    resultLabel.innerText = '';
    resultLabel.classList.add('invisible');

    //If the function don't enter the control it return a false value
    return false;
}
)