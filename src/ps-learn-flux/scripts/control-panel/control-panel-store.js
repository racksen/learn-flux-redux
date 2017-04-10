import {Store} from '../flux';
import * as AppDebug from '../app.debug'
import * as ControlPanelConstants from './control-panel-constants'

export class ControlPanelStore extends Store{

    constructor(dispatcher) {
        super(dispatcher);
        this.__log = AppDebug.getDebug('ControlPanelStore:log')
    }
    

    getInitialState(){
        const preferences_default = {
            userName : 'Senthil',
            fontSize : 'small',
        };
        const preferences_stored = localStorage[ControlPanelConstants.LOCAL_STORAGE_NAME];
        
        return  preferences_stored ? JSON.parse(preferences_stored) : preferences_default;

    }

    __onDispatch(action){
        //this.__log(`Store received the action: ${JSON.stringify(action)}`);
        switch (action.type) {
            case ControlPanelConstants.UPDATE_USERNAME:
                this.__state.userName= action.value;
                this.__emitChange();
                break;
            case ControlPanelConstants.UPDATE_FONTSIZE_PREFERENCE:
                this.__state.fontSize= action.value;
                this.__emitChange();
                break;
        }
    }

    getUserPreferences(){
        return this.__state;
    }

}


