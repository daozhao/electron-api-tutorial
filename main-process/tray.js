const { Menu, Tray } = require('electron');
const path = require('path');

let appIcon = null;

appIcon = new Tray(path.join(__dirname,'./lover.png'));

const menu = Menu.buildFromTemplate([{
    label:'close',
    click: function(){
        // appIcon.destory();
        console.log('menu close button click')
        // appIcon.destory();

    }
}])

appIcon.setToolTip('my best app');
appIcon.setContextMenu(menu);