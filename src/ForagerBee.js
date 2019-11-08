// jshint esversion:6
class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.honeyPot = 0;
    this.forage = (treasure) => {this.treasureChest.push(treasure);};

  }
}