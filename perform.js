import Game from './game.js';
import Turn from './turn.js';

startGame = (game) => {
  game = new Game ();
  game.initialize ();
}

startTurn = (turn) => {
  turn = new Turn ();
  game.initialize ();
}