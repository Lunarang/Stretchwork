class Routine{
    static all = []
    static routineContainer = document.getElementById("routine-container")
    static routineForm = document.getElementById("form-container")

    constructor({id, name, muscles}){
        this.id = id;
        this.name = name;

        // Collect muscle IDs
        const newArr = muscles.map(myFunction)
        function myFunction(muscle) {
        return muscle.id;
        }
        this.muscleIds = newArr;

        // Create div element container for this instance
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `routine-${this.id}`

        // add this instance to class array
        Routine.all.push(this)
    }

    routineHTML(){
        this.element.innerHTML += 
            `
                <h2>${this.name}</h2>
                    <div id="muscle-container-${this.id}">
                    </div>
                <button id="delete-bttn">Delete</button>
            `
        return this.element;
    }

    appendDOM(){
        Routine.routineContainer.appendChild(this.routineHTML())
        this.renderMuscles()

        // Event listener for delete button
        this.element.addEventListener('click', this.deleteBttn)
    }

    deleteBttn = () => {
        if (event.target.innerText === 'Delete'){
            routineService.deleteRoutine(this.id)
        }
    }

    renderMuscles(){
        // Use routine's muscle array to find 
        // corresponding instance of muscle object and add each object's html to DOM
        const muscles = Muscle.all.filter(findMuscle, this.muscleIds);

        function findMuscle (value){
            return this.includes(value.id);
        }

        // Select muscle container
        const muscleContainer = document.querySelector(`#muscle-container-${this.id}`);
        
        // Iterate over each muscle object to retrieve html
        // Append muscle object's html to this routine
        for (const muscle of muscles){
            const m = muscle.element.innerHTML
            muscleContainer.insertAdjacentHTML('afterbegin', m)
        }
    }

    static renderForm(){
        Routine.routineForm.innerHTML += 
        `
        <form>
            <label for="name">Routine Name:</label><br>
            <input type="text" id="name" name="name"><br>

            <label for="muscles">Choose a muscle:</label><br>
            <select name="muscles" id="muscles">

            </select><br>

            <label for="stretches">Choose a stretch:</label><br>
            <select name="stretches" id="stretches">

            </select><br>

            <input type="button" id="addMuscle" value="Add Another Muscle" />
            <input type="submit" id="create">
        </form>
        `
        // Selectors
        const muscleSelect = document.querySelector('#muscles');
        const stretchSelect = document.querySelector('#stretches');
        const addMuscle = document.querySelector('#addMuscle');

        // Add muscles to dropdown menu
        const muscles = Muscle.all;

        for (const muscle of muscles){
            const html = `<option value="${muscle.name}">${muscle.name}</option>`
            muscleSelect.insertAdjacentHTML('beforeend', html)
        }

        // Action when a muscle is selected
        muscleSelect.onchange = function() {
            // Clear stretch options
            stretchSelect.innerHTML = "";

            // Find muscle object and it's stretches
            const selected = muscles.find(muscle => muscle.name === this.value)
            const stretches = Stretch.all.filter(findStretch, selected.stretchIds);

            function findStretch (value){
                return this.includes(value.id);
            }

            // Add associated stretches to drop down menu
            for (const stretch of stretches){
                const stretchHtml = `<option value="${stretch.name}">${stretch.name}</option>`
                stretchSelect.insertAdjacentHTML('beforeend', stretchHtml)
            }
        }

        // Click on Add Muscle button
        // addMuscle.addEventListener('click', makeInputs);

        // function makeInputs(){

        // }

        Routine.routineForm.style.display = 'none';
    }
}