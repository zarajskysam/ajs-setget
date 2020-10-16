/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import Character from './character';

export default class MagicChar extends Character {
  constructor(name, type, range, stoned) {
    super(name, type);
    // eslint-disable-next-line no-sequences
    this.range = range,
    this.stoned = stoned,
    this.attack = 10,
    this.defence = 40;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') throw new Error('The stoned value must only be a Boolean value');
    this._stoned = value;
    this.setMod();
  }

  get stoned() {
    return this._stoned;
  }

  setMod() {
    this.rangeMod = (11 - this.range) / 10;
    this.stonedMod = this.stoned ? Math.log2(this.range) * 5 : 0;
  }

  set attack(value) {
    value = value * this.rangeMod - this.stonedMod;
    if (value < 0) {
      value = 0;
    }
    this._attack = Math.ceil(value);
  }

  get attack() {
    return this._attack;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Нельзя повысить уровень мертвого персонажа');
    this.level += 1;
    // eslint-disable-next-line no-underscore-dangle
    this._attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}
