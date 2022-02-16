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

  updateInput('food-input', 'rent-input', 'cloth-input')

})



function updateInput(inputId){
        
            const foodInput = document.getElementById(inputId);
            const rentInput = document.getElementById(inputId);
            const clothInput = document.getElementById(inputId);
    
    
            const foodInputValue = foodInput.value;
            const rentInputValue = rentInput.value;
            const clothInputValue = clothInput.value
    
    
            const totalExpenses = document.getElementById('total-expanses');
            const expanceSum = totalExpenses.innerText = parseInt(foodInputValue) + parseInt(rentInputValue) + parseInt(clothInputValue);
            
            
            const income = document.getElementById('income').value;
            const incomeValue = parseInt(income);
            const balance = document.getElementById('balance');
            balance.innerText = incomeValue - expanceSum;
        

        // if(inputId.value < 0 || inputId !== 'number'){
        //     document.getElementById('validation').classList.add('visible');
           
        // }
           

}

document.getElementById('save').addEventListener('click', function(){
    const income = document.getElementById('income').value;
    const saveInputValue = document.getElementById('save-input').value;
    const percent = (saveInputValue / income) * 100;
    // const numericPercent = (percent * 0.01) * income;
    const saveAmount = document.getElementById('save-amount').innerText = percent;
    const balanceRemain = document.getElementById('balance').innerText;
    
    document.getElementById('Remain-amount').innerText =  balanceRemain - percent;

    
})