// make all service calls to back end regarding routine object

class RoutineService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action
    getRoutines(){
        fetch(`${this.endpoint}/routines`)
        .then(resp => resp.json())
        .then(routines => {
            for (const routine of routines){
                const r = new Routine(routine)
                r.appendDOM()
            }
        })
    }

    // // 2: Create action
    // createRoutine(){
    //     const routine = {
    //         name: document.getElementById('name').value,
    //     }

    //     const configObj = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //         body: JSON.stringify(contact)
    //     }
        
    //     fetch(`${this.endpoint}/routines`)
    //     .then(resp => resp.json())
    //     .then(routine => {
    //         const r = new Routine(routine)
    //         r.appendDOM()
    //     })
    // }

    // // 3: Delete action
    // deleteRoutine(id){
    //     fetch(`${this.endpoint}/routines/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(json => alert(json.message))
    // }
}