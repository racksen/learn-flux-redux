import * as TasksConstants from './tasks-constants';

    
export const createNewTaskAction = (payload)=> { 
    return {
        type: TasksConstants.CREATE_TASK,
        value: payload
    };
};

export const completeTaskAction = (id, isComplete)=> { 
    return {
        type: TasksConstants.COMPLETE_TASK,
        id,
        value: isComplete
    };
};

export const showTasksAction = (show)=> { 
    return {
        type: TasksConstants.SHOW_TASKS,
        value: show
    };
};


