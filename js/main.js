'use strict'

// ****** DISCOUNT CODE ******

//Get the discount field 
const userDiscount = document.getElementById('user-discount');
console.log(userDiscount);

//Function for user discount code validation
userDiscount.addEventListener('keyup', function () {

    //Define an array with all the valid discount code
    const validDiscount = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    //Transform the value of the discount field into uppercase and save it in a variable
    const upUserDiscount = userDiscount.value.toUpperCase();
    console.log(upUserDiscount);


}
)
