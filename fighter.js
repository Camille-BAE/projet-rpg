import Character from './character.js';
// extends sert à donner l'héritage de Character à ton fichier.js
export default class Fighter extends Character{
  constructor (name, hp = 12, dmg = 4, mana = 40, status) {
    super(hp, dmg, mana, status); // la clé "super" veut dire que les propriétés viennent de ton parent qui est Character
    this.name = name;  
    this.immune = false;
    this.status = "playing";
  }

  darkVision () {

  }

  takeDamage () {

  }

  dealDamage () {

  }

}
