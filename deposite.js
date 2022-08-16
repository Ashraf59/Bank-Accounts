//step-1: Add event listener to deposite button
document.getElementById('btn-deposite').addEventListener('click', function(){
    //step-2: Get the deposite amount from the deposite inpute field
    //For input field use dot .value to get the value from inside the input field.
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;//Value akon string hisebe ace.
    const newDepositeAmount = parseFloat(newDepositeAmountString); //Value ke amra string teke number a convert korlam.

    //Step-3: Get the current deposite total.
    //Amra jodi input field teke value nei, tahole amader ke dot value use korte hobe, r jodi input field chara kono tag teke jemon h1, p, i, ul eisob tag teke value get kori tahole amader ke innerText use korte hobe dot value er poriborte.

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;//Value akon string hisebe ace.
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);//Value ke amra string teke number a convert korlam.
   
    //Step-4: Add numbers to set total deposite.
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    //Step-5: Get the current balance total.
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;//Value akon string hisebe ace.
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);//Value ke amra string teke number a convert korlam.

    //Step-6: Calculate Current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    //Set the balance total.
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step-7: Clear the deposite field
    depositeField.value = '';
    
})