const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const initialState = [{
    title: "To-Do Item #1",
    description: "Some text",
    isDone: false
},{
    title: "To-Do Item #2",
    description: "Some text",
    isDone: true
},{
    title: "To-Do Item #3",
    description: "Some text",
    isDone: true
},{
    title: "To-Do Item #4",
    description: '',
    isDone: true
}];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state + 1)
            return  state + 1

        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(item =>
                todo(item, action)
            )
        default:
            return state
    }
}

export default todos