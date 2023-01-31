function taskReducer(tasks, action) {
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    title: action.title,
                    description: action.description
                }
            ]
        }
        case "REMOVE_TASK": {
            return tasks.filter((task, index) => index !== action.id)
        }
        default: {
            throw Error("Unknown Action" + action.type)
        }
    }
}

export default taskReducer;