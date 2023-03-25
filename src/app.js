// UI Elements
let M_plan = document.querySelector('#step2-mo'),
    Y_plan = document.querySelector('#step2-yr'),
    M_addon = document.querySelector('#step3-mo'),
    Y_addon = document.querySelector('#step3-yr'),
    M_finish = document.querySelector('#finish-mo'),
    Y_finish = document.querySelector('#finish-yr'),
    thankYou = document.querySelector('.thanks'),
    Next = document.querySelector('.next'),
    nextStep = document.querySelector('.next-step'),
    La = document.querySelector('.next-st'),
    Toggle = document.querySelector('#check'),
    toggleY = document.querySelector('#check1'),
    confirm = document.querySelector('.confirm'),
    Back = document.querySelector('.back'),
    backWards = document.querySelector('.backwards'),
    all = document.querySelectorAll('#chall');


// Events
Next.addEventListener('click', function(e){
     P_info = document.querySelector('#p-info');
     P_info.className += ' hidden';
     e.target.parentElement.className += ' hidden';

     M_plan.classList.remove('hidden');
     nextStep.parentElement.classList.remove('hidden');

    e.preventDefault;
});

Toggle.addEventListener('click', function(e){
    if(M_plan.classList.contains('hidden')){
        Y_plan.className += ' hidden';
        M_plan.classList.remove('hidden');
    }else{
        M_plan.className += ' hidden';
        Y_plan.classList.remove('hidden');
    }

    e.preventDefault()
});

nextStep.addEventListener('click', Nexts)
function Nexts(e){
    e.target.parentElement.parentElement.className += ' hidden';
    e.target.parentElement.parentElement.nextElementSibling.children[0].classList.remove('hidden');
    e.target.parentElement.parentElement.nextElementSibling.children[2].classList.remove('hidden');

    e.preventdefault
}

La.addEventListener('click', Nextes)
function Nextes(e){
    e.target.parentElement.parentElement.className += ' hidden';
    e.target.parentElement.parentElement.nextElementSibling.children[0].classList.remove('hidden');
    e.target.parentElement.parentElement.nextElementSibling.children[2].classList.remove('hidden');
    
    e.preventdefault
}

Back.addEventListener('click', goBack);
backWards.addEventListener('click', previous);
// Go back function
function goBack(e){
   let main = document.querySelector('#p-info');
   const Next = document.querySelector('.next');
   let back = document.querySelector('.back');

   back.parentElement.parentElement.children[0].className += ' hidden';
   back.parentElement.className += ' hidden'
   main.classList.remove('hidden');
   Next.parentElement.classList.remove('hidden');
   
   e.preventDefault
}

// backWards function for step 3
function previous(e){
    let last = document.querySelector('#step2-mo');

    backWards.parentElement.parentElement.children[0].className += ' hidden';
    backWards.parentElement.parentElement.children[2].className += ' hidden';

    last.parentElement.classList.remove('hidden');

    e.preventDefault
}