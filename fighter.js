import Character from './character.js';
// extends sert à donner l'héritage de Character à ton fichier.js
export default class Fighter extends Character{
  constructor(name,hp=6,dmg=6,mana=20,status="player") {
    super(hp,dmg,mana,status); // la clé "super" veut dire que les propriétés viennent de ton parent
    this.name = name;  
    this.immune = false;
}

}