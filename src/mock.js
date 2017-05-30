export let mock = {
    isEditMode: false,
    filters: {
        showDone: true
    },
    progress: 75,
    categories: [{
        title: "Category 1",
        isActive: true,
        isExpanded: false,
        tasks: [{
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
        }],
        categories: []
    },{
        title: "Category 2",
        isActive: false,
        isExpanded: false,
        tasks: [{
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
        }],
        categories: []
    },{
        title: "Category 3",
        isActive: false,
        isExpanded: true,
        tasks: [{
            title: "To-Do Item #1",
            description: '',
            isDone: false
        },{
            title: "To-Do Item #2",
            description: '',
            isDone: true
        },{
            title: "To-Do Item #3",
            description: '',
            isDone: true
        },{
            title: "To-Do Item #4",
            description: '',
            isDone: true
        }],
        categories: [{
            title: "Category 3.1",
            isOpen: false,
            tasks: [{
                title: "To-Do Item #3.1",
                description: "Some text",
                isDone: false
            },{
                title: "To-Do Item #3.2",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.3",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.4",
                description: "Some text",
                isDone: true
            }]
        },{
            title: "Category 3.2",
            isOpen: false,
            tasks: [{
                title: "To-Do Item #3.1",
                description: "Some text",
                isDone: false
            },{
                title: "To-Do Item #3.2",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.3",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.4",
                description: "Some text",
                isDone: true
            }]
        },{
            title: "Category 3.3",
            isOpen: false,
            tasks: [{
                title: "To-Do Item #3.1",
                description: "Some text",
                isDone: false
            },{
                title: "To-Do Item #3.2",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.3",
                description: "Some text",
                isDone: true
            },{
                title: "To-Do Item #3.4",
                description: "Some text",
                isDone: true
            }]
        }]
    }]
};
