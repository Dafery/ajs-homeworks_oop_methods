import Daemon from '../Daemon';

test('Проверка персонажа Daemon', () => {
  const input = new Daemon('12345', 'Daemon');
  const result = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});
