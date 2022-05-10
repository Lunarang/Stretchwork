class Muscle {
    // remember all muscle objects within a class variable (an array)
    // if an object gets deleted from backend, be sure to
    // create a method to also remove it from array
    static all = []

    // initialization
    constructor(name){
        this.name = name;
        // make this instance's data accesible in html
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = 'muscle-${this.id}'
        // add this instance to class array
        Muscle.all.push(this)
    }
}