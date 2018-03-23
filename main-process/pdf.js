const { BrowserWindow, ipcMain, shell } = require('electron');

const path = require('path');

const fs = require('fs');

const os = require('os');


function printToPDF(win) {
    const pdfPath = path.join(os.tmpdir(), 'myapp.pdf');

    // const win = BrowserWindow.getFocusedWindow();
    win.webContents.on('did-finish-load', () => {
        win.webContents.printToPDF({}, (err, data) => {
            if (err) {
                console.error(err);
            }
            fs.writeFile(pdfPath, data, (error) => {
                if (error) {
                    console.error(error);
                }
                shell.openExternal('file://' + pdfPath);
            });
        })

    })
}

module.exports = {
    pdf: printToPDF
}