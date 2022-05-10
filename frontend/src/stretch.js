class Stretch {
    // remember all objects within a class variable (an array)
    // if an object gets deleted from backend, be sure to
    // create a method to also remove it from array
    static all = []
    static stretchContainer = document.getElementById("stretch-container")
    // initialization
    constructor(instructions){
        this.instructions = instructions;
        // make this instance's data accesible in html
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = 'stretch-${this.id}'
        // add this instance to class array
        Stretch.all.push(this)
    }
}