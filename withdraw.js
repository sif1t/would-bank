/*
   1. add event listener to the withdraw button
    2. get the withdraw amount from the input field
    2-5. also make sure to convart the input a number by using parseFloat()
    3. update current withdraw total
    4. celculate the total withdraw amount
    4-5. set total withrow amoount
    5. get the previous balance total
    6. celculate the new balance total
    6-5. set the new balance total
    7. clear the withdraw input field
   8. withdraw amount can not be negative

*/


//step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawInput.value;
    // convert string to float
    const withdrawAmount = parseFloat(withdrawAmountString);
    // step-3
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    // convert string to float
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
    // step-4
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    // update withdraw total amount
    withdrawTotal.innerText = newWithdrawTotal;

    // step-5
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    // convert string to float
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     if (withdrawAmount > previousBalanceTotal) {
      alert('You can not withdraw more than what you have in your account');
      return;
     }
    
    // step-6
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    // update balance total amount
    balanceTotal.innerText = newBalanceTotal;

  // step-7
    withdrawInput.value = '';

    
    


  





});