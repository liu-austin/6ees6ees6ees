// jshint esversion:6
class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.treasureChest = [];
    this.honeyPot = 0;
    this.forage = () => 'I am too old, let me play cards instead';
    this.gamble = (treasure) => this.treasureChest.push(treasure);

  }
}