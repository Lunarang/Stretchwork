// GLOBAL VARIABLES
    const base_url = "http://127.0.0.1:3000"
    const stretchService = new StretchService(base_url);
    const muscleService = new MuscleService(base_url);
    const routineService = new RoutineService(base_url);

stretchService.getStretches();
muscleService.getMuscles();
routineService.getRoutines();

// SELECTORS
    const h1 = document.querySelector('h1'); // Stretchwork Title
    const routineBttn =  document.getElementById('routineBttn'); // New Routine Button

// EVENT LISTENERS
    // Click Stretchwork Title
    h1.addEventListener('click', refreshPage);

    // Click 'Build a Routine' Button
    routineBttn.addEventListener('click', toggleForm);

    // 'Submit' button action for new routine form
    Routine.routineForm.addEventListener('submit', submitBttn)

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

    // Makes POST request to backend & appends DOM with new routine
    function submitBttn(){
        event.preventDefault()
        routineService.createRoutine()
        event.target.reset() //clears form
        Routine.routineForm.style.display = 'none' //hides form
    }