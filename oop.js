// Tuesday 9th Jan Homework

// 1.

const car = {
  make: "Ford",
  model: "Fiesta",
  getCarDetails: function () {
    return this.make + " " + this.model;
  },
};

console.log(car.getCarDetails());

// 2.

const car2 = [{ make: "Toyota", model: "Supra" }];

// 3.

car2.forEach((vehicle) => {
  console.log(car.getCarDetails.call(vehicle));
});

// 4.

function fullName() {
  let name = "Dan Casey";

  return {
    secret() {
      return name;
    },
    mySecret(value) {
      name = value;
    },
  };
}

const _name = fullName();

console.log(_name.secret());
_name.mySecret("Joe Bloggs");
console.log(_name.secret());

// 5.

function Game(name) {
  this.name = name;
}

// 6.

const game1 = new Game("Lethal Company");
const game2 = new Game("Football Manager 24");
const game3 = new Game("God Of War Ragnarok");

console.log(game1, game2, game3);

Game.prototype.getName = function () {
  return this.name;
};

console.log(game1.getName());
