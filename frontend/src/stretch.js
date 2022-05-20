class Stretch {
    static all = []

    // Initialization
    constructor({id, name, instructions}){
        this.id = id;
        this.name = name;
        this.instructions = instructions;

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `stretch-${this.id}`

        Stretch.all.push(this)
    }

    // HTML generated
    stretchHTML(){
        this.element.innerHTML += 
        `
            <h4>${this.name}</h4>
            <p>${this.instructions}</p>
        `
        return this.element
    }
}