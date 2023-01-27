export class Player {
  constructor(nome, pv, str, ap, armor) {
    this.nome = nome;
    this.pv = pv;
    this.str = str;
    this.ap = ap;
    this.armor = armor;
  }

  attack(target) {
    target.pv = target.pv - this.str;
    return `${this.nome} causou ${this.str} de dano e a vida atual do inimigo é ${target.pv}`;
  }

  receiveDamage(damage) {
    this.pv = this.pv - damage;
    return `${this.nome} recebeu ${damage} de dano e sua vida atual é ${this.pv}`;
  }
}

class Goblin extends Player {
  constructor(pv, str, ap, armor) {
    super(pv, str, ap, armor);
    this.nome = 'Wild Goblin';
  }

  attack(target) {
    let damage = this.str + this.ap;
    target.pv = target.pv - damage;
    return `${this.nome} atacou o jogador e o causou ${damage} de dano, a vida do inimigo agora é ${target.pv}`;
  }

  receiveDamage(damage) {
    let totalDamage = damage - this.armor;
    this.pv = this.pv - totalDamage;
    return `${this.nome} recebeu ${totalDamage} de dano, sua vida atual é ${this.pv}`;
  }
}
