class Shop {
  constructor(name) {
    this.name = name;
  }

  shopName() {
    return `Shop Name: ${this.name}`;
  }
}

class Game extends Shop {
  constructor(name, product) {
    super(name);
    this.product = product;
  }

  itemName() {
    return `Shop Name: ${this.name}, Product Name: ${this.product}`;
  }
}

class Console extends Game {
  constructor(name, product, console) {
    super(name, product);
    this.console = console;
  }

  consoleName() {
    return `Shop Name: ${this.name}, Product Name: ${this.product}, Console Name: ${this.console}`;
  }
}

const _game = new Console("Amazon", "Spiderman 2", "PS5");

console.log(_game.consoleName());
