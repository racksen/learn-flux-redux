import * as AppDebug from '../app.debug';
import {createStore} from 'redux';

// import {Dispatcher} from '../flux';
// import * as MessageBoardConstants from './message-board-constants';
// import * as MessageBoardAction from './message-board-action';
// import {MessageBoardStore} from './message-board-store';


export class MessageBoard{

    constructor() {
        this.__log = AppDebug.getDebug('message-board:log');
        
    }
    

    init(){
        
        const defaultState = {
            messages: [
                { date : new Date(), postedBy: 'Senthil', content: 'message-1'},
                { date : new Date(), postedBy: 'Rajni', content: 'message-2'},
                { date : new Date(), postedBy: 'Srinidhi', content: 'message-3'},
                { date : new Date(), postedBy: 'Priya', content: 'message-4'},
            ],
            userStatus: undefined
        };

        const store = createStore((state=defaultState)=>{
            return state;
        });

        const render = () => {
           const {messages, userStatus} = store.getState();
           const contents= messages
                .map(message=>{
                    return `<div>${message.postedBy} : ${message.content}</div>`
                })
                .join("");
            document.getElementById('messages').innerHTML= contents;
        };

        render();
        // const messageBoardDispatcher = new Dispatcher();
        // const messageBoardStore = new MessageBoardStore(messageBoardDispatcher);
        // messageBoardDispatcher.dispatch('TEST_DISPATCH');
        
        // messageBoardStore.addListener((state)=>{
        //     this.__log(`Current state is ${JSON.stringify(state)}`);
        //     //render(state);
        // });


    }
}


