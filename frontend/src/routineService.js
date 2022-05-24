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
            Routine.renderForm();
        })
    }

    // 2: Create action
    createRoutine(event){
        const data = {
            name: event.target.dataset.name,

        }
        
        fetch(`${this.endpoint}/routines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(routine => {
            const r = new Routine(routine)
            r.appendDOM()
        })
    }

    // 3: Delete action
    deleteRoutine(id){
        // Delete from database
        fetch(`${this.endpoint}/routines/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))

        // Delete from JS memory
        const routines = Routine.all;
        const deleted = routines.find(routine => routine.id === id);
        const index = routines.indexOf(deleted);

        if (index > -1) {
            routines.splice(index, 1);
        }

        // Refresh page to update DOM
        window.location.reload();
    }
}