class StretchService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action
    getStretches(){
        fetch(`${this.endpoint}/stretches`)
        .then(resp => resp.json())
        .then(stretches => {
            for (const stretch of stretches){
                const s = new Stretch(stretch)
                s.stretchHTML();
            }
        })
    }
}