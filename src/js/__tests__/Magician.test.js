/* eslint-disable no-underscore-dangle */
import MagicChar from '../CharLogic/MagicChar';
import Magician from '../CharLogic/MagicChar/Magician';

test('MagicianClassTest', () => {
  const expected = {
    defence: 40,
    health: 100,
    level: 1,
    name: 'Nimba',
    range: 2,
    rangeMod: 0.9,
    stonedMod: 5,
    type: 'Magician',
    _attack: 4,
    _stoned: true,
  };
  const testClass = new Magician('Nimba', 2, true);
  expect(testClass).toEqual(expected);
});

test('stoned Error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const char = new MagicChar('Vita', 'Daemon', 3, 123);
  }).toThrow('The stoned value must only be a Boolean value');
});

test('attack Test', () => {
  const char = {
    _attack: 0, _stoned: true, defence: 40, health: 100, level: 1, name: 'petr', range: 5, rangeMod: 0.6, stonedMod: 11.60964047443681, type: 'Daemon',
  };
  const expected = new MagicChar('petr', 'Daemon', 5, true);
  const expected1 = expected._attack;

  expect(expected1).toBe(char._attack);
});
