import Character from './character.js';

export default class Archer extends Character{
  constructor (name, hp = 10, dmg = 4, mana = 20, status) {
    super(hp, dmg, mana, status);
    this.name = name;  
    this.immune = false;
    this.status = "playing";
  }

  shinyArrow = () => {
    
  }

  takeDamage = () => {

  }

  dealDamage = () => {

  }

}