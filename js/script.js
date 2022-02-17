document.getElementById('calculate-btn').addEventListener('click', function(){



    updateInput('food-input', 'rent-input','cloth-input');

  

})



function updateInput(foodtId, rentId, clothId) {

        const foodInput = document.getElementById(foodtId);
        const rentInput = document.getElementById(rentId);
        const clothInput = document.getElementById(clothId);
        
        const foodInputValue = parseFloat(foodInput.value);
        const rentInputValue = parseFloat(rentInput.value);
        const clothInputValue = parseFloat(clothInput.value);



        if(foodInputValue, rentInputValue, clothInputValue < 0){
            document.getElementById('validation').style.display = 'block';
        }
        else if(foodInputValue, rentInputValue, clothInputValue == ''){
    
            document.getElementById('str-notify').style.display = 'block';
        }
        else{
            const totalExpenses = document.getElementById('total-expanses');
            const expanceSum = totalExpenses.innerText = parseInt(foodInputValue) + parseInt(rentInputValue) + parseInt(clothInputValue);
            
            const income = document.getElementById('income').value;
            const incomeValue = parseInt(income);
            const balance = document.getElementById('balance');
            balance.innerText = incomeValue - expanceSum;
            

            if(income < 0 || typeof income !== 'number'){
                document.getElementById('validation').style.display = 'block';
            }
            
            
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


