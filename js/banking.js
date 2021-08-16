/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    //clear Input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId,amount){
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const priviousTotal = parseFloat(totalText);

    const newDepositTotal = priviousTotal + amount;
    totalField.innerText = newDepositTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    return previousBalanceAmount;
}


function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText =balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText); */
    const previousBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceAmount + amount;
    } 
    else{
        balanceTotal.innerText = previousBalanceAmount - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click',function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat(depositAmountText); */

    

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousAmount = parseFloat(depositTotalText);


    const newDepositTotal = previousAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
 */
    

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;  */

    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total',newDepositAmount);
        updateBalance(newDepositAmount,true);
    }
    
    
})


// Handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    
    

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */ 

    

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */

    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total',newWithdrawAmount);
        updateBalance(newWithdrawAmount,false);
    }
    if(newWithdrawAmount > currentBalance){
        console.log('You can not withdraw cause over amount');
    }
    

})