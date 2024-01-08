import { createRoot } from 'react-dom/client';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Body from './Body';
import Chat from './Chat';

function Index() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/body" element={<Body />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render((<Index />));

// // calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
// const $res = document.getElementById("res");

// async function main() {
//     const res = await window.api.get("test");
//     console.log(res);
//     // $res?=res;
// }
// window.onload =async () => {
//    return await main();   
// }