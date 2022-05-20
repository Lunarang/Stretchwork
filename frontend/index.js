// GLOBAL VARIABLES
    const base_url = "http://127.0.0.1:3000"
    const stretchService = new StretchService(base_url);
    const muscleService = new MuscleService(base_url);
    const routineService = new RoutineService(base_url);

stretchService.getStretches();
muscleService.getMuscles();
routineService.getRoutines();

// Creates and hides new routine form
Routine.renderForm();

// SELECTORS
    const h1 = document.querySelector('h1'); // Stretchwork Title
    const h2 = document.querySelector('h2'); // Routine Name
    const h3 = document.querySelector('h3'); // Muscle Name
    const h4 = document.querySelector('h4'); // Stretch Name
    const routineBttn =  document.getElementById('routineBttn'); // New Routine Button


// EVENT LISTENERS
    // Click Stretchwork Title
    h1.addEventListener('click', refreshPage);

    // Click 'Build a Routine' Button
    routineBttn.addEventListener('click', toggleForm);

    // 'Submit' button action for new routine form
    Routine.routineForm.addEventListener('submit', handleSubmit)

    // Click a Routine Name
    // if(h2){
    //     h2.addEventListener('click', viewRoutine);
    //     // Displays target routine's muscles
    //     function viewRoutine(event){
    //         const thisRoutine = document.querySelector(`#${event.target.id}`);
    //         thisRoutine.renderMuscles();
    //         console.log("yes!")
    //     }
    //   }

// FUNCTIONS
    // Refreshes the page to take user 'home'
    function refreshPage(){
        window.location.reload();
    }

    // Toggles between showing/hiding new routine form
    function toggleForm(){
        const x = Routine.routineForm;

        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

function handleSubmit(){
    event.preventDefault()
    RoutineService.createRoutine()
    event.target.reset() //clears form
}