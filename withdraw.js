/* 1. Add event handler with the withdraw button.
2. Get the withdraw amount from the withdraw input field.
2.5 also make sure to convert the input into a number by using parseFloat.
3. Get previous withdraw amount.
4. Calculate total withdraw amount.
4.5. Set total withdraw amount.
5. Get the previous balance total.
6. Calculate New balance total.
6.5 Set the new balance total.

7. Clear the withdraw input field.
 */

//Step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //Step-7:
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide the amount');
        return;
    }

    //Step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   

    //Step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Tumar balnce a oto taka nai');
        return;
    }

     
    //Step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //Step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
    
})