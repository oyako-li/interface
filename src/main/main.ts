import { app, BrowserWindow, ipcMain } from "electron";
import OpenAI from "openai";
import path from "path";

const openAi = new OpenAI();

async function request(data:string) {
    const completion = await openAi.chat.completions.create({
        messages: [{ role: "system", content: "You must always answer in japanese." },{role:"user", content:data}],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
    return completion
}

app.on("ready", () => {
    let width = 800;
    let height = 600;
    let win: BrowserWindow | null = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.on("closed", () => {
        win = null;
    });
    win.loadURL(`file://${path.join(__dirname, "./index.html")}`);
});

ipcMain.on("get", async (event, data)=>{
    return await request(data);
})