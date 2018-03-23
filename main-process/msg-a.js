const { ipcMain } = require('electron');

ipcMain.on('msg-a',(event)=> {
    event.returnValue = 'hello';
})

ipcMain.on('msg-a-1',(event,arg) => {
    console.log(arg.name);
    event.sender.send('msg-a-1-back',{name: 'yugo'});
})