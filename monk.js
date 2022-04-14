import Character from './character.js';

export default class Monk extends Character{
  constructor(name,hp=8,dmg=2,mana=200,status="player") {
    super(hp,dmg,mana,status); 
    this.name = name;  
    this.immune = false;
}

}
