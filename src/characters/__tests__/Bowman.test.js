import Bowman from '../Bowman';

test('Проверка персонажа Bowman', () => {
  const input = new Bowman('12345', 'Bowman');
  const result = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(input).toEqual(result);
});
