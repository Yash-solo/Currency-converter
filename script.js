const CuntryURL ="https://flagsapi.com/Cuntry/style/64.png";
const ConvertBtn = document.querySelector('.changing');
const selectDropD = document.querySelectorAll('select');

document.querySelector('.money').value = 100;

// creating options for every select element 
for(let sel of selectDropD){
    for(let obj in currencyToCountry){
        let dropdown = document.createElement('option');
        dropdown.innerHTML = `${obj}`;
        sel.appendChild(dropdown);
    }
}

//adding button functionality 
ConvertBtn.addEventListener('click',(evt)=>{
    //Giving button its default behaviour
    evt.preventDefault();

    // Taking the amount 
    const amountInput = document.querySelector('.money');     
    const amountVal = Number(amountInput.value);
    
})

for(let sel of selectDropD){
    sel.addEventListener('change',(el)=>{
        console.log(el.target.value)
    })
}