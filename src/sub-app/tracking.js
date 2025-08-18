

function hello (){
    console.log('Hello Tracking bobo');
}

hello();


const trackingNumberBtn = document.querySelector('.js-tracking_number');
const trackReferenceBtn = document.querySelector('.js-track-reference');
const trackTcnBtn = document.querySelector('.js-track-tcn');
const trackProofBtn = document.querySelector('.js-track-proof');

const totalTrackingBtn = document.querySelectorAll('.tracking--btn');


const trackingOptionsNumberInput = document.querySelector('.js--tracking_number-input');
const trackReferenceInput = document.querySelector('.js--reference_number-input');
const trackTcnInput = document.querySelector('.js--tcn-number-input');
const trackProofInput = document.querySelector('.js--proof-of-delivery-input');


// trackingNumberBtn.addEventListener('click', ()=>{
//     console.log(trackingOptionsNumber);

//     if(!trackingNumberBtn.classList.contains('showTrackOption')){
//         trackingOptionsNumber.classList.add('showTrackOption');
//     }else{
//         trackingOptionsNumber.classList.remove('showTrackOption');
//     }
// })

totalTrackingBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{

        if((btn === trackingNumberBtn)){
            trackingOptionsNumberInput.classList.add('showTrackOption');
            trackReferenceInput.classList.remove('showTrackOption');
            trackTcnInput.classList.remove('showTrackOption');
            trackProofInput.classList.remove('showTrackOption');


        }else if(btn === trackReferenceBtn){
            trackReferenceInput.classList.add('showTrackOption');
            trackingOptionsNumberInput.classList.remove('showTrackOption');
            trackTcnInput.classList.remove('showTrackOption');
            trackProofInput.classList.remove('showTrackOption');

        }else if(btn === trackTcnBtn){
            trackTcnInput.classList.add('showTrackOption');
            trackingOptionsNumberInput.classList.remove('showTrackOption');
            trackReferenceInput.classList.remove('showTrackOption');
            trackProofInput.classList.remove('showTrackOption');

        }else if(btn === trackProofBtn){
            trackProofInput.classList.add('showTrackOption');
            trackingOptionsNumberInput.classList.remove('showTrackOption');
            trackReferenceInput.classList.remove('showTrackOption');
            trackTcnInput.classList.remove('showTrackOption');
        }
    })
})



const proof = document.querySelector('.proof');
const viewLadingInput =document.querySelector('.js--view__lading');
const viewDeliveryInput = document.querySelector('.js--view__delivery')

console.log(proof);



proof.addEventListener("click", function(e){

    if(e.target.classList.contains('js-proof__delivery--btn')){
        // console.log('proof Delivering...');
        viewLadingInput.style.display = "none";
        viewDeliveryInput.classList.remove ('hideView-delivery')
        viewLadingInput.classList.add ('hideView-delivery')
        
    }else if(e.target.classList.contains('js-proof__lading--btn')){
        // console.log('proof lading... ');
        viewLadingInput.style.display = "initial";
        viewLadingInput.style.display = "initial";
        viewLadingInput.classList.remove ('hideView-delivery')
        viewDeliveryInput.classList.add ('hideView-delivery')
    }
})




