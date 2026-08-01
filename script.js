const BaseURL = "https://cdn.jsdelivr.net/npm/js-currency-converter@2.0.0/build/js-currency-converter.min.js";
const ConvertBtn = document.querySelector('.changing');
const selectDropD = document.querySelectorAll('select');
let massageRslt = document.querySelector('#msg');
let fromcountry = document.querySelector('.fromIMG');
let toCountry = document.querySelector('.toIMG');

document.querySelector('.money').value = 100;

// creating options for every select element 
for(let sel of selectDropD){
    for(let curr in currencyToCountry){
        let dropdown = document.createElement('option');
        dropdown.innerHTML = `${curr}`;
        sel.appendChild(dropdown);

        if(sel.name ==="from"&& curr==="USD"){
            dropdown.selected = "selected";
        }
        if(sel.name ==="TO"&& curr==="INR"){
            dropdown.selected = "selected";
        }
    }
    
}
let firstCode = "USD";
let secondCode = "INR";
//changing images when edit dropdown
selectDropD[0].addEventListener('change',(evt)=>{
    firstCode = evt.target.value;
    fromcountry.src=`https://flagsapi.com/${currencyToCountry[evt.target.value]}/flat/64.png`;
})
selectDropD[1].addEventListener('change',(evt)=>{
    secondCode = evt.target.value;
    toCountry.src = `https://flagsapi.com/${currencyToCountry[evt.target.value]}/flat/64.png`;
})


//adding button functionality 
ConvertBtn.addEventListener('click',(evt)=>{
    //Giving button its default behaviour
    evt.preventDefault();

    // Taking the amount 
    const amountInput = document.querySelector('.money');     
    const amountVal = Number(amountInput.value);

    //result 
    async function getRate(){
        let from = firstCode;
        let to = secondCode;
        let response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        let data = await response.json();
        let FinalVal = data.rates[to]*amountVal;

        massageRslt.innerHTML = `${amountVal} ${from} = ${FinalVal} ${to}`;
    }
    getRate();
    
})

