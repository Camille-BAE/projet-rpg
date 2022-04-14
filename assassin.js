import Character from './character.js';

export default class Assassin extends Character{
  constructor (name, hp = 6, dmg = 6, mana = 20, status) {
    super(hp, dmg, mana, status);
    this.name = name;  
    this.immune = false;
    this.status = "playing";
  }

  shadowHit () {
    
  }

  takeDamage () {

  }

  dealDamage () {

  }

}