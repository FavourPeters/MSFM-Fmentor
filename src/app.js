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
    confirmed = document.querySelector('.confirm'),
    Back = document.querySelector('.back'),
    backWards = document.querySelector('.backwards'),
    lists = document.querySelectorAll('li a'),
    P_info = document.querySelector('#p-info'),
    lastBack = document.querySelector('.last-back');

loadallEventlisteners()
function loadallEventlisteners() {
    Next.addEventListener('click', Next1);
    Toggle.addEventListener('click', toggle);
    nextStep.addEventListener('click', Nexts);
    La.addEventListener('click', Nextes);
    Back.addEventListener('click', goBack);
    backWards.addEventListener('click', previous);
    lastBack.addEventListener('click', laBack);
    confirmed.addEventListener('click', confirmation);
}
// Class for selection
class Choice {
    constructor(num){
        this.num = num
    }

    Nextes(){
        const Last = document.querySelector('.next-st')
        Last.parentElement.parentElement.className += ' hidden';
        Last.parentElement.parentElement.nextElementSibling.children[this.num].classList.remove('hidden');
        Last.parentElement.parentElement.nextElementSibling.children[2].classList.remove('hidden');
    };
}

// Events
// Event for next button on Personal Info
function Next1(e){
     P_info = document.querySelector('#p-info');
     P_info.className += ' hidden';
     e.target.parentElement.className += ' hidden';

     M_plan.classList.remove('hidden');
     nextStep.parentElement.classList.remove('hidden');
     lists[0].parentElement.style.backgroundColor = 'transparent';
    
    
    e.preventDefault();
};

// Event for Toggle
function toggle(e){
    if(M_plan.classList.contains('hidden')){
        Y_plan.className += ' hidden';
        M_plan.classList.toggle('hidden');
    }else{
        M_plan.className += ' hidden';
        Y_plan.classList.toggle('hidden');
        Toggle.parentElement.children[1].classList.remove('left-1')
    }
    
    e.preventDefault();
};

// Event for next button on Plan page
function Nexts(e){
    // Conditional in respect to the choice based on toggle
    if (Toggle.parentElement.children[1].classList.contains('left-1')){
        e.target.parentElement.parentElement.nextElementSibling.children[0].classList.remove('hidden');
    }else{
        e.target.parentElement.parentElement.nextElementSibling.children[1].classList.remove('hidden');
        e.target.parentElement.parentElement.nextElementSibling.children[0].className += ' hidden';
    }

    e.target.parentElement.parentElement.className += ' hidden';
    e.target.parentElement.parentElement.nextElementSibling.children[2].classList.remove('hidden');

    e.preventdefault;
}

// Event for next button on Add-ons
function Nextes(e){
    // Conditional making use of the classes to correspond with choice
    if (M_plan.classList.contains('hidden')){
        new Choice(1).Nextes()
    }else
        new Choice(0).Nextes()
    e.preventdefault();
}

// If you're loving this code make sure to follow me on my handles

// Go back event on plan page
function goBack(e){
   let main = document.querySelector('#p-info');
   const Next = document.querySelector('.next');
   let back = document.querySelector('.back');

   back.parentElement.parentElement.children[0].className += ' hidden';
   back.parentElement.parentElement.children[1].className += ' hidden';
   back.parentElement.className += ' hidden'
   main.classList.remove('hidden');
   Next.parentElement.classList.remove('hidden');
   
   
   e.preventDefault();
}

// go back event for add-on page
function previous(e){
    let last = document.querySelector('#step2-mo');

    backWards.parentElement.parentElement.children[0].className += ' hidden';
    backWards.parentElement.parentElement.children[1].className += ' hidden';
    backWards.parentElement.parentElement.children[2].className += ' hidden';

    last.parentElement.classList.remove('hidden');

    e.preventDefault();
}

// confirm event
confirmed.addEventListener('click', confirmation);

function confirmation(e){
    const conf = document.querySelector('.confirm');

    conf.parentElement.parentElement.className += ' hidden'

    thankYou.classList.remove('hidden');

    e.preventDefault();
}
// go back event for finishing up page
function laBack() {
    const laB = document.querySelector('.last-back');

    laB.parentElement.parentElement.previousElementSibling.classList.remove('hidden');
    laB.parentElement.className += ' hidden';
    laB.parentElement.parentElement.children[0].className += ' hidden';
    laB.parentElement.parentElement.children[1].className += ' hidden';
}


