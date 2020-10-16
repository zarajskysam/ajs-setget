import MagicChar from '../MagicChar';

export default class Magician extends MagicChar {
  constructor(name, range, stoned) {
    const type = 'Magician';
    super(name, type, range, stoned);
  }
}
