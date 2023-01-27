export class player {
  constructor(nome, pv, str, ap, armor) {
    this.nome = nome;
    this.pv = pv;
    this.str = str;
    this.ap = ap;
    this.armor = armor;
  }

  attack() {
    let damage = this.str + this.ap;
    return `${this.nome} atacou o inimigo e o causou ${damage} de dano`;
  }

  receiveDamage() {
    let damage = this.str + this.ap;
    return `${this.nome} recebeu ${this.pv + this.armor - damage}`;
  }
}

export class Goblin extends player {
  constructor(pv, str, ap, armor) {
    super(pv, str, ap, armor);
    this.nome = "Wild Goblin";
  }

  attack() {
    let damage = this.str + this.ap;
    return `${this.nome} atacou o jogador e o causou ${damage} de dano`;
  }

  receiveDamage() {
    let damage = this.str + this.ap;
    return `${this.nome} recebeu ${this.pv + this.armor - damage}`;
  }
}
