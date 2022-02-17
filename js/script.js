document.getElementById('calculate-btn').addEventListener('click', function(){
    // const foodInput = document.getElementById('food-input');
    // const rentInput = document.getElementById('rent-input');
    // const clothInput = document.getElementById('cloth-input');
    
    // const foodInputValue = foodInput.value;
    // const rentInputValue = rentInput.value;
    // const clothInputValue = clothInput.value
    
    // const totalExpenses = document.getElementById('total-expanses');
    // const expanceSum = totalExpenses.innerText = parseInt(foodInputValue) + parseInt(rentInputValue) + parseInt(clothInputValue);
    
    
    // const income = document.getElementById('income').value;
    // const incomeValue = parseInt(income);
    // const balance = document.getElementById('balance');
    // balance.innerText = incomeValue - expanceSum;
    updateInput('food-input', 'rent-input','cloth-input');

  

})

function updateInput(foodtId, rentId, clothId) {

    if(foodtId, rentId, clothId < 0){
        // document.getElementById('validation').classList.add('visible');
        document.getElementById('validation').style.display = 'block';
    }
    const foodInput = document.getElementById(foodtId);
    const rentInput = document.getElementById(rentId);
    const clothInput = document.getElementById(clothId);
    
    const foodInputValue = foodInput.value;
    const rentInputValue = rentInput.value;
    const clothInputValue = clothInput.value
    
    const totalExpenses = document.getElementById('total-expanses');
    const expanceSum = totalExpenses.innerText = parseInt(foodInputValue) + parseInt(rentInputValue) + parseInt(clothInputValue);
    
    
    const income = document.getElementById('income').value;
    const incomeValue = parseInt(income);
    const balance = document.getElementById('balance');
    balance.innerText = incomeValue - expanceSum;

}




document.getElementById('save').addEventListener('click', function(){
    const income = document.getElementById('income').value;
    const saveInputValue = document.getElementById('save-input').value;
    const neumericPercent = income * parseFloat(saveInputValue / 100)
    const saveAmount = document.getElementById('save-amount').innerText = neumericPercent;
    const balanceRemain = document.getElementById('balance').innerText;
    document.getElementById('Remain-amount').innerText =  balanceRemain - saveAmount;

    if(balanceRemain < saveAmount){
        alert("isufuceent balance")
    }
    

    
})