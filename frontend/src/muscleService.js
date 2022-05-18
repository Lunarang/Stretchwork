// make all service calls to back end regarding muscle objects

class MuscleService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action (get)
    getMuscles(){
        fetch(`${this.endpoint}/muscles`)
        .then(resp => resp.json())
        .then(muscles => {
            for (const muscle of muscles){
                const m = new Muscle(muscle)
                m.muscleHTML();
            }
        })
    }
}