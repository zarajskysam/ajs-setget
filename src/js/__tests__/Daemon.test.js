
import Daemon from '../CharLogic/MagicChar/Daemon';

test('DaemonClassTest', () => {
  const expected = {
    defence: 40,
    health: 100,
    level: 1,
    name: 'Nimba',
    range: 2,
    rangeMod: 0.9,
    stonedMod: 5,
    type: 'Daemon',
    _attack: 4,
    _stoned: true,
  };
  const testClass = new Daemon('Nimba', 2, true);
  expect(testClass).toEqual(expected);
});
