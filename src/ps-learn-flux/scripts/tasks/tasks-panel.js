import * as AppDebug from '../app.debug';
import {Dispatcher} from '../flux';
import * as TasksConstants from './tasks-constants';
import * as TasksAction from './tasks-action';
import {TasksStore} from './tasks-store';


export class Tasks{

    constructor() {
        this.__log = AppDebug.getDebug('Tasks:log');
        
    }
    

    init(){
        
        const tasksDispatcher = new Dispatcher();
        const tasksStore = new TasksStore(tasksDispatcher);

        tasksDispatcher.dispatch('TEST_DISPATCH');
        
        tasksStore.addListener((state)=>{
            this.__log(`Current state is ${JSON.stringify(state)}`);
            //render(state);
        });


    }
}


