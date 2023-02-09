import Character, {
  damageError, levelUpError, nameError, typeError,
} from '../Character';
import Daemon from '../characters/Daemon';

test.each([['b'], ['12345678901']])('Проверка невалидного имени персонажа', (name) => {
  const input = () => new Character(name);
  expect(input).toThrow(nameError);
});

test('Проверка невалидного типа персонажа', () => {
  const input = () => new Character('12345', '1');
  expect(input).toThrow(typeError);
});

test('Проверка валидного имени и типа персонажа', () => {
  const input = new Character('12345', 'Daemon');
  const result = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  expect(input).toEqual(result);
});

test('Проверка удачного повышения уровня персонажа', () => {
  const input = new Daemon('12345', 'Daemon');
  input.levelUp();
  const result = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(input).toEqual(result);
});

test('Проверка неудачного повышения уровня персонажа', () => {
  const input = new Daemon('12345', 'Daemon');
  input.health = 0;
  expect(() => input.levelUp()).toThrow(levelUpError);
});

test('Проверка удачного нанесения урона персонажу', () => {
  const input = new Daemon('12345', 'Daemon');
  input.damage(20);
  const result = {
    name: '12345',
    type: 'Daemon',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});

test('Проверка неудачного нанесения урона персонажу', () => {
  const input = new Daemon('12345', 'Daemon');
  input.health = 0;
  expect(() => input.damage(20)).toThrow(damageError);
});
