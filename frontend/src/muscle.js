class Muscle {
    static all = []
    
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
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `muscle-${this.id}`

        // add this instance to class array
        Muscle.all.push(this)
    }

    muscleHTML(){
        this.element.innerHTML += 
            `
                <h3>${this.name}</h3>
            `
        const stretches = Stretch.all.filter(findStretch, this.stretchIds);

        function findStretch (value){
            return this.includes(value.id);
        }

        const stretchContainer = this.element

        for (const stretch of stretches){
            const s = stretch.element.innerHTML
            stretchContainer.insertAdjacentHTML('beforeend', s)
        }

        return this.element;
    }
}