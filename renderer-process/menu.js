const ipc = require('electron').ipcRenderer;

const menu = document.querySelector('#menu');

document.oncontextmenu =  menu.onclick = () => {
    ipc.send('show-context-menu');
}