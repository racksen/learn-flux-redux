import * as ControlPanelConstants from './control-panel-constants'

    
export const userNameUpdateAction = (name)=> { 
    return {
        type: ControlPanelConstants.UPDATE_USERNAME,
        value: name
    }
}

export const fontSizePreferenceUpdateAction = (size)=> { 
    return {
        type: ControlPanelConstants.UPDATE_FONTSIZE_PREFERENCE,
        value: size
    }
}


