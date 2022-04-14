import Character from './character.js';

export default class Paladin extends Character{
  constructor (name, hp = 16, dmg = 3, mana = 160, status) {
    super(hp, dmg, mana, status);
    this.name = name;  
    this.immune = false;
    this.status = "playing";
  }

  healingLighting = () => {

  }

  takeDamage = () => {

  }

  dealDamage = () => {

  }

}
