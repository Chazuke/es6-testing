import express from 'express';

export const createServer = () => {
    const server = express();

    server.get('/health', (req, res) => {
        res.status(200).send('OK');
    });

    return server;
}