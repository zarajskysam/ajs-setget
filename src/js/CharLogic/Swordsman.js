import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    const type = 'Swordsman';
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
