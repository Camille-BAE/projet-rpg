import Character from './character.js';

export default class Berzerker extends Character{
  constructor(name,hp=8,dmg=4,mana=0,status="player") {
    super(hp,dmg,mana,status);
    this.name = name;  
    this.immune = false;
  }

  rage () {
    
  }

}
