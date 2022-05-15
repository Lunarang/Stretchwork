// global variables
const base_url = "http://127.0.0.1:3000"
const stretchService = new StretchService(base_url)
const routineService = new RoutineService(base_url)
const muscleService = new MuscleService(base_url)

routineService.getRoutines()

// clicking on title displays routines index
const h1 = document.querySelector('h1')
h1.addEventListener('click', () => routineService.getRoutines())

// clicking on routine name displays routine's muscles and stretches
const h2 = document.querySelector('h2')
console.log(h2)
// h2.addEventListener('click', () => muscleService.getMuscles())

// 'Build a Routine' button action renders form
const buildRoutine =  document.getElementById('buildRoutine')
buildRoutine.addEventListener('click', () => Routine.renderForm())

// 'Submit' button action for new routine form
Routine.routineForm.addEventListener('submit', handleSubmit)

function handleSubmit(){
    event.preventDefault()
    RoutineService.createRoutine()
    event.target.reset() //clears form
}