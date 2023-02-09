import Zombie from '../Zombie';

test('Проверка персонажа Zombie', () => {
  const input = new Zombie('12345', 'Zombie');
  const result = {
    name: '12345',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(input).toEqual(result);
});
