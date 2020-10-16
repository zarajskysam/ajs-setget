import Character from './character';

const type = 'Undead';

export default class Undead extends Character {
  constructor(name) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
