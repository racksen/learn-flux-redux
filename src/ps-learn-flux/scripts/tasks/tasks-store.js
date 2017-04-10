import {generate as id} from 'shortid'
import * as AppDebug from '../app.debug'
import {ReduceStore} from '../flux';
import * as TasksConstants from './tasks-constants'


export class TasksStore extends ReduceStore{

    constructor(dispatcher) {
        super(dispatcher);
        this.__log = AppDebug.getDebug('TasksStore:log')
    }

    getInitialState(){
        const tasks_default = {
            tasks : [
                {id: id(), content: 'task1', complete: false},
                {id: id(), content: 'task2', complete: false},
                {id: id(), content: 'task3', complete: false},
                {id: id(), content: 'task4', complete: true},
            ],
            showComplete: true

        };
        
        return  tasks_default;

    }

    reduce(state,action){
        this.__log('reducing', state, action)
        return state;
    }
    
    getState(){
        return this.__state;
    }

}


