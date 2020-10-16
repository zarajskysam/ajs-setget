import Bowman from '../CharLogic/Bowman';

test('BowmanClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const testClass = new Bowman('Nimba');
  expect(testClass).toEqual(expected);
});
