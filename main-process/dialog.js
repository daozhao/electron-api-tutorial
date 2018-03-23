const { dialog } = require('electron');

// dialog.showErrorBox('title','content');


// dialog.showMessageBox({
//     type:'info',
//     title: 'message',
//     message: 'hello',
//     buttons:['ok','cancel']
// },(index) => {
//     if ( index == 0 ) {
//         console.log('You click ok.');
//     } else {
//         console.log('You click cancel');
//     }
// })

dialog.showOpenDialog({
    properties:['openFile','openDirectory']
}, (files) => {
    console.log(files);
})

dialog.showSaveDialog({
    title: 'save some file',
    filters: [
        {name:'some',extensions:['js']}
    ]
},(filename) => {
    console.log(filename);
})