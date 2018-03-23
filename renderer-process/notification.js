const path = require('path');


const option = {
    title: 'title',
    body: 'body',
    icon: path.join('main-process/lover.png')
}

const myNotification = new window.Notification(option.title,option);

myNotification.onclick = () =>{
    console.log('clicked')

}