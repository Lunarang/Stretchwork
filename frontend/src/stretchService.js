// make all service calls to back end regarding stretch object

class StretchService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action
    getStretches(){
        fetch(`${this.endpoint}/stretches`)
        .then(resp => resp.json())
        .then(stretches => { // hash of stretches from database
            for (const stretch of stretches){
                const s = new Stretch(stretch)
            }
        })
    }
}