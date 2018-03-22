const click = document.querySelector('#click');

const path = require('path');

const BrowerWindow = require('electron').remote.BrowserWindow;

click.onclick = () => {
//    window.open('http://nodelover.me');
    win = new BrowerWindow({
        width: 300,
        height: 200,
        frame: true,
        // frame: false
        //transparent: true
    })

    win.on('close',()=>{win = null});

    win.loadURL(path.join('file:',__dirname,'../model.html'));

    console.dir(win);

    //open('./model.html');
}