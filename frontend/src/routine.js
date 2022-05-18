class Routine{
    static all = []
    static routineContainer = document.getElementById("routine-container")
    static routineForm = document.getElementById("form-container")

    constructor({id, name, muscles}){
        this.id = id;
        this.name = name;
        // collect muscle ids
        const newArr = muscles.map(myFunction)
        function myFunction(muscle) {
        return muscle.id;
        }
        this.muscleIds = newArr;
        // create an list element container for this instance
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `routine-${this.id}`
        // this.element.addEventListener('click', this.handleClick())
        // add this instance to class array
        Routine.all.push(this)
    }

    routineHTML(){
        this.element.innerHTML += 
            `
                <h2>${this.name}</h2>
                <ul>
                    <div id="muscle-container-${this.id}">
                    </div>
                </ul>
                <button id="delete-bttn">Delete</button>
            `
        return this.element;
    }

    appendDOM(){
        Routine.routineContainer.appendChild(this.routineHTML())
        this.renderMuscles()
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
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>

            <label for="muscles">Choose a muscle:</label><br>
            <select name="muscles" id="muscles">
              <option value="musclename">Muscle 1</option>
              <option value="musclename">Muscle 2</option>
              <option value="musclename">Muscle 3</option>
            </select><br>

            <label for="stretches">Choose a stretch:</label><br>
            <select name="stretches" id="stretches">
              <option value="stretchname">Stretch 1</option>
              <option value="stretchname">Stretch 2</option>
              <option value="stretchname">Stretch 3</option>
            </select><br>

            <input type="submit" id="create">
        </form>
        `
        Routine.routineForm.style.display = 'none'
    }

    // handleClick = () => {
    //     if (event.target.innerText === 'Delete'){
    //         RoutineService.deleteRoutine(this.id)
    //     }
    // }
}