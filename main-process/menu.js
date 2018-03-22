const { Menu, app } =  require('electron');


let template = [
    {
        label: 'one',
        submenu: [
            {
                label: 'two'
            },
            {
                type: 'separator'
            },
            {
                label: 'Haha',
                click: () => {
                    console.log('Haha')
                }
            },
 
        ]
    },
    {
        label :'ttt',
        submenu: [
            {
                label:'mmmmm'
            }
        ]
    }
]

let menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

app.dock.setMenu(menu);