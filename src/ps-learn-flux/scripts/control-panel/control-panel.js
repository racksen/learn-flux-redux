import {Dispatcher} from '../flux';
import * as AppDebug from '../app.debug'
import * as ControlPanelConstants from './control-panel-constants'
import * as ControlPanelAction from './control-panel-action';
import {ControlPanelStore} from './control-panel-store';


export class ControlPanel{

    constructor() {
        this.__log = AppDebug.getDebug('ControlPanel:log')
        
    }
    

    init(){
        
        const controlPanelDispatcher = new Dispatcher();
        
        $('#userNameInput').on('input', ({target})=>{
            const name = target.value;
            this.__log(`Dispatching : ${name}`);
            controlPanelDispatcher.dispatch(ControlPanelAction.userNameUpdateAction(target.value));
        });

        document.forms.fontSizeForm.fontSize.forEach(element=>{
            element.addEventListener('change', ({target})=>{
                controlPanelDispatcher.dispatch(ControlPanelAction.fontSizePreferenceUpdateAction(target.value));
            });
        });

        const controlPanelStore = new ControlPanelStore(controlPanelDispatcher);

        controlPanelStore.addListener((state)=>{
            //this.__log(`Current state is ${JSON.stringify(state)}`);
            render(state);
            localStorage[ControlPanelConstants.LOCAL_STORAGE_NAME] = JSON.stringify(state);
        });

        const render = ({userName,fontSize})=>{
            $('#userName').text(userName);
            $('.container')[0].style.fontSize = fontSize === 'small' ? '16px' : '24px';
            document.forms.fontSizeForm.fontSize.value = fontSize;
        };

        render(controlPanelStore.getUserPreferences());
    }
}


