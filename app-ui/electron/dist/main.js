"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win = null;
var MIN_WIDTH = 800;
var MIN_HEIGHT = 600;
function createWindow() {
    var size = electron_1.screen.getPrimaryDisplay().workAreaSize;
    win = new electron_1.BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        minHeight: MIN_HEIGHT,
        minWidth: MIN_WIDTH,
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/app-ui/index.html"),
        protocol: "file:",
        slashes: true
    }));
    // opens DevTools
    // win.webContents.openDevTools();
    win.on("closed", function () {
        win = null;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
function isRoot() {
    return path.parse(process.cwd()).root == process.cwd();
}
//# sourceMappingURL=main.js.map