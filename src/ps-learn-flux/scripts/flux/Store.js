export class Store {

    constructor(dispatcher) {
        this.__listeners = [];
        //register with dispatcher to receive dispatched actions
        dispatcher.register(this.__onDispatch.bind(this));
        //declare the store state
        this.__state = this.getInitialState();
    }


    __onDispatch(){
        throw new Error('Subclass must override the __onDispatch method');
    }

    getInitialState(){
        throw new Error('Subclass must override the getInitialState method');
    }

    addListener(listener){
        this.__listeners.push(listener);
    }

    __emitChange(){
        this.__listeners.forEach(listener=>listener(this.__state));
    }
    
}