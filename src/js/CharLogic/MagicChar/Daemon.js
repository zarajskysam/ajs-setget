/* eslint-disable no-sequences */
import MagicChar from '../MagicChar';

export default class Daemon extends MagicChar {
  constructor(name, range, stoned) {
    const type = 'Daemon';
    super(name, type, range, stoned);
  }
}
