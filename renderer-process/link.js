const { shell } = require('electron');

// shell.openExternal('https://www.bing.com');

const links = document.querySelectorAll('a[href]');

Array.from(links).forEach((link) => {
    const url = link.getAttribute('href');
    if ( url.indexOf('http') == 0) {
        link.onclick = (e) => {
            e.preventDefault();
            shell.openExternal(url);
        }
    }
})