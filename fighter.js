//import Character from './character.js'

//export default 
class Fighter extends Character{

  constructor(name,hp=12,dmg=4,mana=40,status="player") {
    super(hp,dmg,mana,status);
    this.name = name;
    this.dimdeg=false;
  }
}