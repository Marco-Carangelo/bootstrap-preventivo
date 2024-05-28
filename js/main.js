'use strict'

// ****** DISCOUNT CODE ******

//Get the discount field 
const userDiscount = document.getElementById('user-discount');

//Define a boolean variable for the discount result inizialized to false
let discountResult = false;

//Function for user discount code validation
function discountValidation() {

    //Define an array with all the valid discount code
    const validDiscount = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    //Transform the value of the discount field into uppercase and save it in a variable
    const upUserDiscount = userDiscount.value.toUpperCase();

    //Get the result label element from the dom
    const resultLabel = document.getElementById('discount-result')

    //Validate the input value only if is not empty
    if (upUserDiscount) {

        //If the value in the text area is included in the strings array visualize the success label
        //Before any variation on the result label, the previous classes must be deleted to not overlap them to the new ones
        if (validDiscount.includes(upUserDiscount)) {

            userDiscount.classList.remove('bg-danger-subtle', 'text-danger')
            userDiscount.classList.add('bg-success-subtle', 'text-success')
            resultLabel.innerText = 'Il codice sconto inserito è valido';
            resultLabel.classList.remove('invisible', 'bg-danger-subtle', 'border-danger-subtle', 'text-danger');
            resultLabel.classList.add('bg-success-subtle', 'border-success-subtle', 'text-success');
            return true;

        } else {
            userDiscount.classList.remove('bg-success-subtle', 'text-success')
            userDiscount.classList.add('bg-danger-subtle', 'text-danger')
            resultLabel.innerText = 'Il codice sconto inserito non è valido';
            resultLabel.classList.remove('invisible', 'bg-success-subtle', 'border-success-subtle', 'text-success');
            resultLabel.classList.add('bg-danger-subtle', 'border-danger-subtle', 'text-danger');
            return false;
        }

    }
    //If the function don't enter the control, it restore the original status of the result label and return a false value

    userDiscount.classList.remove('bg-danger-subtle', 'text-danger', 'bg-success-subtle', 'text-success')
    resultLabel.innerText = '';
    resultLabel.classList.add('invisible');
    return false;
}

//Run the discount validation function on field change and assign the result to a variable
userDiscount.addEventListener('keyup', function () {
    discountResult = discountValidation();

}
)

// ****** DISCOUNT CODE - END ******



// ****** SELECT MENU POPULATION ******

//Define a object containing the services informations
const services = [
    {
        description: 'Sviluppo backend',
        hourPrice: 20.50,
        duration: 10,
    },
    {
        description: 'Sviluppo frontend',
        hourPrice: 15.30,
        duration: 10,
    },
    {
        description: 'Analisi progettuale',
        hourPrice: 33.60,
        duration: 10,
    },
    {
        description: 'Sviluppo App mobile',
        hourPrice: 24.30,
        duration: 10,
    },
    {
        description: 'Sviluppo realtà aumentata',
        hourPrice: 42.90,
        duration: 10,
    },
]

//Get the select element from Html
const userSelection = document.getElementById('service-type');

//Populate the select menu 
selectPopulation(services);

// ****** SELECT MENU POPULATION - END ******


// ****** MAIN PROGRAM - ESTIMATE CALCULATION ******

//Get the HTML form element
const estimateCalc = document.getElementById('estimate-calc');

//Main program on click of the submit button
estimateCalc.addEventListener('submit', function (event) {

    //Prevent the page reload at click
    event.preventDefault();

    //Execute the main program only if the form has valid data
    if (estimateCalc.checkValidity()) {

        //Price calculation function
        let finalPrice = priceCalc(services[userSelection.value]);

        //Check if the user have a discount applied
        if (discountResult) {
            finalPrice = finalPrice * 0.75;
        }

        //Result print function
        resultPrint(finalPrice);
    } else {
        event.stopPropagation();

    }

    estimateCalc.classList.add('was-validated')
})

// ****** MAIN PROGRAM - ESTIMATE CALCULATION - END ******



// ****** FUNCTIONS ******

//Function for final price calculation
function priceCalc(service) {

    //Use the parameters of the object passed as a function paramenter to calculate the price and save the result in a variable
    const result = service.hourPrice * service.duration;

    return result;
}


//Function that display the price result
function resultPrint(price) {

    //Define a variable for the price currencuy. Can be updated to an array if other currencies are added later
    const currency = '€';

    //Get the Html elements where the price is going to be printed
    const priceCurrency = document.getElementById('price-currency');
    const priceValue = document.getElementById('price-value');
    const priceDisplay = document.getElementById('price-display');

    //Save the price first two decimal in a variable and force it in a two digits string
    const cents = String((price.toFixed(2) % 1) * 100).padStart(2, '0');

    //Print the currency value in a SPAN element     
    priceCurrency.innerText = currency;
    //Print the price value in a SPAN element, separating the integer part and the decimal part using interpolation
    priceValue.innerHTML = parseInt(price) + `<small class="fw-light">,${cents}</small>`;
    //Remove the invisible class to the price display section
    priceDisplay.classList.remove('invisible');

}

//Function for populating the select menu

function selectPopulation(jobs) {

    for (let i = 0; i < jobs.length; i++) {
        //Assign the current array element to a variable
        let optn = jobs[i];
        //Create an option element and set is values
        let el = document.createElement("option");
        el.textContent = optn.description;
        el.value = i;
        //Add the created element to the select
        userSelection.appendChild(el);
    }

}

// ****** FUNCTIONS - END ******

