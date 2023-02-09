import Magician from '../Magician';

test('Проверка персонажа Magician', () => {
  const input = new Magician('12345', 'Magician');
  const result = {
    name: '12345',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});
