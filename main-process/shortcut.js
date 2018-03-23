const {app ,globalShortcut, dialog } = require('electron');

app.on('ready', () => {
    globalShortcut.register('Cmd+Y',() => {
        dialog.showMessageBox({
            message: 'shortcut',
            type: 'info',
            detail: 'You already click cmd+Y',
            buttons: ['ok']
        })
    })

})

app.on('will-quit',() => {
    globalShortcut.unregisterAll();
})