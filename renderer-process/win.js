const { BrowserWindow } = require('electron').remote;
const { ipcRenderer } = require('electron');


onload = () => {
    ipcRenderer.on('msg',(event,winId,msg) => {
        let win = BrowserWindow.fromId(winId);
        console.log(msg);
        win.webContents.send('back',winId,{name:'alice',text:'hello~~'})
    })
}