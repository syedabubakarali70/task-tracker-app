export type Task = {
    id: number,
    name: string,
}

export type Action = {
    type: "add" | 'remove',
    payload?: Task
}

const TaskReducer = (state: Task[], action: Action):Task[] => {
    if (action.type === 'add') {
        return [
            ...state,
            action.payload as Task
        ]
    }
    else{
        return state.filter(task => task.id !== action.payload?.id)
    }
}

export default TaskReducer