const { ipcMain } = require('electron');

ipcMain.on('msg-a',(event)=> {
    event.returnValue = 'hello';
})