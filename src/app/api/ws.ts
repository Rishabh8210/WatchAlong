import { IncomingMessage } from 'http';
import { Duplex } from 'stream';
import { WebSocketServer } from 'ws';

let wss: WebSocketServer | undefined;

export default function handler(req: any, res: any) {
    if (!res.socket.server.wss) {
        console.log('Initializing WebSocket server...');
        wss = new WebSocketServer({ noServer: true });

        res.socket.server.on('upgrade', (req: IncomingMessage, socket: Duplex, head: Buffer<ArrayBufferLike>) => {
            wss?.handleUpgrade(req, socket, head, (ws) => {
                wss?.emit('connection', ws, req);
            });
        });

        wss.on('connection', (ws) => {
            console.log('Client connected');
            ws.on('message', (data) => {
                console.log('Message received:', data);
                ws.send(`Echo: ${data}`);
            });

            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });

        res.socket.server.wss = wss;
    }
    res.end();
}
