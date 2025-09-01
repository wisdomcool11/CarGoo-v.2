

console.log('Two Step Verification button');


const twoStepBtn = document.querySelector('.js-two-step__btn');
const verificationMethod = document.querySelector('.js-chose_method_verification');
const toolCard3 = document.querySelector(".js-two-step_verification")
console.log(twoStepBtn);
console.log(verificationMethod);
console.log(toolCard3);


twoStepBtn.addEventListener('click', ()=>{
    if(twoStepBtn.checked){
        console.log('Checked');
        alert('Two Step Verification Enabled');
        verificationMethod.style.display = 'block';

    }else{
        console.log('Not Checked');
        alert('Two Step Verification Disabled');
        verificationMethod.style.display = 'none';

    }
})



