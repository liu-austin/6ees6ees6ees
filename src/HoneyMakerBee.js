// jshint esversion:6
class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = () => {this.honeyPot++;};
    this.giveHoney = () => {this.honeyPot--;};

  }
}
