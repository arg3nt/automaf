const { app, BrowserWindow } = require('electron');
const path = require('path');

function mainWindow() {
    let windowPath = path.join('file://', __dirname, 'build/index.html');

    let win = new BrowserWindow();

    win.on('close', () => {win = null});
    
    //TODO: Get rid of for production build
    win.webContents.openDevTools();
    win.maximize();
    win.loadURL(windowPath);
    win.show();
}

app.on('ready', mainWindow);
