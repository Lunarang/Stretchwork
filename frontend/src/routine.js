class Routine {
    static all = []
    static routineContainer = document.getElementById("routine-container")
    static routineForm = document.getElementById("form-container")

    constructor({name}){
        this.name = name;
        // create an list element container for this instance
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = 'routine-${this.id}'
        this.element.addEventListener('click', this.handleClick())
        // add this instance to class array
        Routine.all.push(this)
    }

    routineHTML(){
        // add html to display data in this instance's list element
        this.element.innerHTML += `
            <h2>${this.name}</h2>
            <button id="delete-bttn">Delete</button>
        `
        return this.element
    }

    appendDOM(){
        Routine.routineContainer.appendChild(this.routineHTML())
    }

    static renderForm(){
        Routine.routineForm.innerHTML += `
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
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            RoutineService.deleteRoutine(this.id)
        }
    }
}