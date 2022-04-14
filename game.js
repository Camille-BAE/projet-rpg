import Fighter from './fighter.js';
import Paladin from './paladin.js';
import Monk from './monk.js';
import Berzerker from './berzerker.js';
import Assassin from './assassin.js';
import Wizard from './wizard.js';
import Archer from './archer.js';

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
    this.wizard = new Wizard ("Mélusine");
    this.archer = new Archer ("Legolas");
    this.players.push(fighter, assassin, paladin, monk, berzerker, wizard, archer);
  }

  newTurn = () => {
    this.turnLeft -= 1;
  }

}

