class Stretch {
    // remember all objects within a class variable (an array)
    // if an object gets deleted from backend, be sure to
    // create a method to also remove it from array
    static all = []
    static stretchContainer = document.getElementById("stretch-container")
    // initialization
    constructor(instructions){
        this.instructions = instructions;
        // create an list element container for this instance
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = 'stretch-${this.id}'
        // add this instance to class array
        Stretch.all.push(this)
    }

    // by separating this from .appendDOM(), it's easier to add an 'update' feature later
    stretchHTML(){
        // add html to display data in this instance's list element
        this.element.innerHTML += `
            <div>
                <p>${this.instructions}</p>
            </div>
        `
        return this.element
    }

    appendDOM(){
        Stretch.stretchContainer.appendChild(stretchHTML())
    }
}