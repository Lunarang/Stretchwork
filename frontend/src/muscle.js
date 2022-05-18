class Muscle {
    static all = []
    static muscleContainer = document.getElementById("muscle-container")

    // initialization
    constructor({id, name, stretches}){
        this.id = id;
        this.name = name;
        
        // collect stretch ids
        const newArr = stretches.map(myFunction)
        function myFunction(stretch) {
        return stretch.id;
        }
        this.stretchIds = newArr;

        // make this instance's data accesible in html block
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `muscle-${this.id}`

        // add this instance to class array
        Muscle.all.push(this)
    }

    muscleHTML(){
        this.element.innerHTML += 
            `
                <h3>${this.name}</h3>
                <div id="stretch-container-${this.id}">
                </div>
            `
        return this.element;
    }

}