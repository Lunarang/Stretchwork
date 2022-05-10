// make all service calls to back end regarding muscle object

class MuscleService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action
    getMuscles(){
        fetch('${this.endpoint}/muscles')
        .then(resp => resp.json())
        .then(muscles => {
            // hash of muscles from database
        })
    }
}