/*

import { Client } from 'boardgame.io/react';

const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell: (G, ctx, id) => {
            G.cells[id] = ctx.currentPlayer;
        },
    },
};

const App = Client({ game: TicTacToe });

export default App;
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
