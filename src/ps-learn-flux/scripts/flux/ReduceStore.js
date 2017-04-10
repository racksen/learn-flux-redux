import {Store} from './Store';

export class ReduceStore extends Store {

    constructor(dispatcher) {
        super(dispatcher);
        
    }

    reduce(state,action){
        throw new Error('Subclass must override the reduce method of reducestore');

    }

    __onDispatch(action){
        const newState = this.reduce(this.__state, action);
        if(newState != this.__state){
            this.__state = newState;
            this.__emitChange();
        }
    }
    
}