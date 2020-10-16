import Zombie from '../CharLogic/Zombie';

test('ZombieClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const testClass = new Zombie('Nimba');
  expect(testClass).toEqual(expected);
});
