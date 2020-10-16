import Undead from '../CharLogic/Undead';

test('UndeadClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const testClass = new Undead('Nimba');
  expect(testClass).toEqual(expected);
});
