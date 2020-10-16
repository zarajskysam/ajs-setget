import Swordsman from '../CharLogic/Swordsman';

test('SwordsmanClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const testClass = new Swordsman('Nimba');
  expect(testClass).toEqual(expected);
});
