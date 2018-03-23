const { ipcRenderer } = require('electron');


const btn = document.querySelector('#msg_a');

btn.onclick = () => {
   const msg = ipcRenderer.sendSync('msg-a');

   console.log(msg);

   ipcRenderer.send('msg-a-1',{name:'alice'});
   ipcRenderer.on('msg-a-1-back',function(event,arg){
       console.log(arg.name);
   });
}