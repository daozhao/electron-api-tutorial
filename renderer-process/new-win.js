const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron').remote;
const path = require('path');

const btn = document.querySelector('#new');

let win;

btn.onclick = () => {
    const winId = BrowserWindow.getFocusedWindow().id;

    win = new BrowserWindow ({
        width: 500,
        height: 500,
        show: true 
    })

    win.loadURL(path.join('file:',__dirname,'../new-win.html'));
    win.webContents.openDevTools();
    win.webContents.on('did-finish-load',(event) => {
        win.webContents.send('msg',winId,{name:'yugo',text:'hello'});
    })

    ipcRenderer.on('back',(event,winId,msg)=>{
        console.log(msg);
    })
}