import {stateMock} from '../mock';

const task = (state = {}, action) => {
    switch (action.type) {
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
            let id = state[state.length-1] ? state[state.length-1].id : 0;
            let item = {
                id: ++id,
                title: action.payload,
                description:'',
                completed: false
            }
            return [
                ...state,
                item
            ]
        case 'TOGGLE_TASK':
            return state.map(item =>
                task(item, action)
            )
        case 'REMOVE_TASK':
            let itemIndex = state.findIndex(el => {
                return el.id === action.payload
            });
            return state.slice(0, itemIndex).concat(state.slice(itemIndex+1))
        default:
            return state
    }
}

export default tasks