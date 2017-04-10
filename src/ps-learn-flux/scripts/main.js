import '../styles/main.css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import * as AppDebug from './app.debug';
import {ControlPanel} from './control-panel';
import {Tasks} from './tasks';
import {MessageBoard} from './message-board';


AppDebug.init();

const href_paths = window.location.pathname.split('/');
const resource_name= href_paths[href_paths.length-1]

switch (resource_name) {
    case 'control-panel.html':
        const cp = new ControlPanel();
        cp.init();
        break;
    case 'tasks.html':
        const tasks = new Tasks();
        tasks.init();
        break;
    case 'message-board.html':
        const messageBoard = new MessageBoard();
        messageBoard.init();
        break;
}
