import {stateMock} from '../mock';

const task = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TASK':
            if (state.id !== action.payload) {
                return state
            }


            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const tasks = (state = stateMock.tasks, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                task(undefined, action)
            ]
        case 'TOGGLE_TASK':
            return state.map(item =>
                task(item, action)
            )
        default:
            return state
    }
}

export default tasks