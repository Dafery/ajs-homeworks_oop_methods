import Undead from '../Undead';

test('Проверка персонажа Undead', () => {
  const input = new Undead('12345', 'Undead');
  const result = {
    name: '12345',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(input).toEqual(result);
});
