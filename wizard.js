import Character from './character.js';

export default class Wizard extends Character{
  constructor (name, hp = 10, dmg = 2, mana = 200, status) {
    super(hp, dmg, mana, status);
    this.name = name;  
    this.immune = false;
    this.status = "playing";
  }

  fireBall = () => {
    
  }

  takeDamage = () => {

  }

  dealDamage = () => {

  }

}