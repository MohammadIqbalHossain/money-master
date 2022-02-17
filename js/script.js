document.getElementById('calculate-btn').addEventListener('click', function(){



    updateInput('food-input', 'rent-input','cloth-input');

  

})



function updateInput(foodtId, rentId, clothId) {

        const foodInput = document.getElementById(foodtId);
        const rentInput = document.getElementById(rentId);
        const clothInput = document.getElementById(clothId);
        
        const foodInputValue = foodInput.value;
        const rentInputValue = rentInput.value;
        const clothInputValue = clothInput.value;

        if(foodInputValue, rentInputValue , clothInputValue < 0){
            document.getElementById('validation').style.display = 'block';
        }

        else if(isNaN(foodInputValue, rentInputValue, clothInputValue == true)){
            document.getElementById('str-notify').style.display ='block';
        }
         
        else {
        
     
            const totalExpenses = document.getElementById('total-expanses');
            const expanceSum = totalExpenses.innerText = parseInt(foodInputValue) + parseInt(rentInputValue) + parseInt(clothInputValue);
            
            const income = document.getElementById('income').value;
            const incomeValue = parseInt(income);
            const balance = document.getElementById('balance');
            balance.innerText = incomeValue - expanceSum;

            if(income < 0){
                document.getElementById('validation').style.display = 'block';
            }

            isIncomeGreater();
          
        }
        
}
   


function  isIncomeGreater(){
    const totalExpenses = document.getElementById('total-expanses').innerText;
    const income = document.getElementById('income').value;
    if(totalExpenses > income){
        alert('You Can not spend more');
    }
}




document.getElementById('save').addEventListener('click', function(){
    
   
    const income = document.getElementById('income').value;
    const saveInputValue = document.getElementById('save-input').value;

    const neumericPercent = income * parseFloat(saveInputValue / 100)

    const balanceRemain = document.getElementById('balance').innerText;

    const saveAmount = document.getElementById('save-amount').innerText = neumericPercent;

    document.getElementById('Remain-amount').innerText =  balanceRemain - saveAmount;

    if(balanceRemain < saveAmount){
        alert("Insufficient Balance")
    }
    
})