const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export const nameError = 'Name is not a string or Name must be between 2-10 characters.';
export const typeError = 'Invalid type.';
export const levelUpError = 'You cannot level up the deceased.';
export const damageError = 'The character is dead.';

export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error(nameError);
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(typeError);
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      Math.round(this.attack *= 1.2);
      Math.round(this.defence *= 1.2);
    } else {
      throw new Error(levelUpError);
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error(damageError);
    }
  }
}
