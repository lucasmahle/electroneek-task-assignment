import { app, BrowserWindow, ipcMain, screen } from "electron";
import * as path from "path";
import * as url from "url";

let win: BrowserWindow | null = null;

const MIN_WIDTH: number = 800;
const MIN_HEIGHT: number = 600;

function createWindow() {
  const size: Electron.Size = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    minHeight: MIN_HEIGHT,
    minWidth: MIN_WIDTH,
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/app-ui/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // opens DevTools
  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

function isRoot() {
    return path.parse(process.cwd()).root == process.cwd();
}
