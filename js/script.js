//Event listener for calculation.
document.getElementById('calculate-btn').addEventListener('click', function(){
   
    updateInput()

})



//Function for calculation. 
function updateInput(){
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothInput = document.getElementById('cloth-input');

    const totalExpenses = document.getElementById('total-expanses');
    console.log(totalExpenses.innerText)
        
    const income = document.getElementById('income').value;
    const balance = document.getElementById('balance');
    
    

    const foodInputValue =  parseInt(foodInput.value);
    const rentInputValue =  parseInt(rentInput.value);
    const clothInputValue = parseInt(clothInput.value);

    const inputSum = foodInputValue + rentInputValue + clothInputValue;
           

    const inputs = [foodInputValue, rentInputValue, clothInputValue];
    

    if(isNaN(foodInputValue, rentInputValue, clothInputValue)){
        document.getElementById('str-notify').style.display ='block';
    }
    else if(income < inputSum){
      balance.innerText = 'You can not spend more'
      balance.style.color = 'white';
    }
     
    else {
        totalExpenses.innerText = inputSum;
        const incomeValue = parseInt(income);
        const balance = document.getElementById('balance');
        balance.innerText = incomeValue - inputSum;

        for(const input of inputs){
            if(input < 0){
            document.getElementById('validation').style.display = 'block';
            totalExpenses.innerText = 'Please give positive num'
            
            }
            else if(isNaN(input)){
                document.getElementById('validation').style.display = 'block';
                totalExpenses.innerText = '00';
                balance.innerText = '00';
            }
            
        } 

    }
    
}   





//Handleing event for saveings section
document.getElementById('save').addEventListener('click', function(){
    
   
    const income = document.getElementById('income').value;
    const saveInputValue = document.getElementById('save-input').value;

    const neumericPercent = income * parseFloat(saveInputValue / 100)

    const balanceRemain = document.getElementById('balance').innerText;

    const saveAmount = document.getElementById('save-amount').innerText = neumericPercent;
    
 

    const ReaminingAmount = document.getElementById('Remain-amount');
    ReaminingAmount.innerText =  balanceRemain - saveAmount;

    if(balanceRemain < saveAmount){
        alert("Insufficient Balance")
        ReaminingAmount.innerText = '00';
    }
    else if(saveInputValue < 0 || isNaN(saveInputValue)){
        alert('Please enter an integr percentage!')
        ReaminingAmount.innerText = '00';
    }

    
})



//Calling function for reset button. 
function reset(){
    
    location.reload();
}