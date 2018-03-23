const { dialog } = require('electron');

dialog.showErrorBox('title','content');


dialog.showMessageBox({
    type:'info',
    title: 'message',
    message: 'hello',
    buttons:['ok','cancel']
},(index) => {
    if ( index == 0 ) {
        console.log('You click ok.');
    } else {
        console.log('You click cancel');
    }
})
