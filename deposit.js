// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
   //step-2: get the deposit amount from the input field
   // foor input field we have to use .value
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountString = depositInput.value;
    // convert string to float
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    
    // step-3: update current deposit total
    // for non-input field we have to use .innerText
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotal.innerText;
    // convert string to float
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // step-4: update current deposit total
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    // update deposit total
     depositTotal.innerText = newDepositTotal;

    // step-5: update balance current total balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    // convert string to float
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
      // step-6: update balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // update balance total
    balanceTotal.innerText = newBalanceTotal;




    // step-7: clear the deposit input field
     depositInput.value = '';

});