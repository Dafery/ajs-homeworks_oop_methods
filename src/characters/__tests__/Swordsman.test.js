import Swordsman from '../Swordsman';

test('Проверка персонажа Swordsman', () => {
  const input = new Swordsman('12345', 'Swordsman');
  const result = {
    name: '12345',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(input).toEqual(result);
});
