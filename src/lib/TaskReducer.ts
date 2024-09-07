export type Task = {
    id: number,
    name: string,
}

export type Action = { type: "add", payload: string } | { type: 'remove', payload: number } | { type: 'get' }


let id = Number(window.localStorage.getItem("id")) || 0;


const TaskReducer = (state: Task[], action: Action): Task[] => {
    if (action.type === 'add') {
        const temp = [
            ...state,
            {
                id: id++,
                name: action.payload || ''
            }
        ]
        window.localStorage.setItem('tasks', JSON.stringify(temp))
        window.localStorage.setItem('id', id.toString() || '0')
        return temp;
    }
    else if (action.type === 'remove') {
        const temp = state.filter(task => task.id !== action.payload)
        window.localStorage.setItem('tasks', JSON.stringify(temp))
        if (temp.length === 0) {
            window.localStorage.setItem('id', '0')
            id = 0;
        }
        return temp;
    }
    else if (action.type === 'get') {
        const temp = JSON.parse(window.localStorage.getItem('tasks') || '[]')
        return temp;
    }
    else {
        throw new Error('Invalid action type');
    }
}

export default TaskReducer