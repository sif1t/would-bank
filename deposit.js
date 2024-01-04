// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
   //step-2: get the deposit amount from the input field
   // foor input field we have to use .value
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    console.log(newDepositAmount);

    // step-3: update current deposit total
    // for non-input field we have to use .innerText
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    depositTotal.innerText = newDepositAmount

});