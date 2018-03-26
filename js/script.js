function handle_submission(evt) {
    event.preventDefault(); //Stop the form from reloading the page
    event.stopPropagation(); //Stop the form from reloading the page

   //Build up our answer object
     var answers = {    
         'show me': get_answer('DID YOU MAKE THE GRADE?  SOLDIER')
     }
     //Fill in the answer
    'DID YOU MAKE THE GRADE'?  'SOLDIER'

    var answer_div = document.querySelector('#answers'); 
     answer_div.classList.add('show');
    }

//Find the form on the page and attach a handler for when it's submitted
var form = document.querySelector('show me');
form.addEventListener('submit', handle_submission); //Anytime the form is submitted, we want to call the function handle_submission
