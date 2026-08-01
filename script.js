const CuntryURL ="https://flagsapi.com/Cuntry/style/64.png";
const ConvertBtn = document.querySelector('.changing');
const selectDropD = document.querySelectorAll('select');
let fromcountry = document.querySelector('.fromIMG');
let toCountry = document.querySelector('.toIMG');

document.querySelector('.money').value = 100;


// creating options for every select element 


//changing images when edit dropdown
selectDropD[0].addEventListener('change',(e)=>{
    fromcountry.src=`https://flagsapi.com/${currencyToCountry[selectDropD[0].value]}/flat/64.png`;
})
selectDropD[1].addEventListener('change',(e)=>{
    toCountry.src = `https://flagsapi.com/${currencyToCountry[selectDropD[1].value]}/flat/64.png`;
})


//adding button functionality 
ConvertBtn.addEventListener('click',(evt)=>{
    //Giving button its default behaviour
    evt.preventDefault();

    // Taking the amount 
    const amountInput = document.querySelector('.money');     
    const amountVal = Number(amountInput.value);
    
})

