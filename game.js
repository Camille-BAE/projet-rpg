import Fighter from './fighter.js';
import Paladin from './paladin.js';
import Monk from './monk.js';
import Berzerker from './berzerker.js';
import Assassin from './assassin.js';

export default class Game {
  constructor (turnLeft = 10, players) {
    this.turnLeft = turnLeft;
    this.players = players;
  }

  initialize = () => {
    this.fighter = new Fighter ("Grace");
    this.paladin = new Paladin ("Ulder");
    this.monk = new Monk ("Moana");
    this.berzerker = new Berzerker ("Draven");
    this.assassin = new Assassin ("Carl");
    this.players.push(fighter, assassin, paladin, monk, berzerker, wizard, pirate);
  }

  newTurn = () => {
    this.turnLeft -= 1;
  }

}


