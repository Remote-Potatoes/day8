const filipe = {
  firstName: "Filipe",
  lastName: "Freire",
  nationality: "Portuguese",
  age: 24,
  livesIn: "Sweeden",
  greeting() {
    console.log(`Ola, my name is ${filipe.firstName}`);
  },
};

// const amy = {
//   firstName: "Amy",
//   lastName: "Andersen",
//   nationality: "Australian",
//   age: 21,
//   livesIn: "Germany",
//   greeting() {
//     // console.log(`Howdy mate, my name is ${this.firstName}`);
//     console.log(this);
//   },
// };

filipe.greeting();
// amy.greeting();

class ZoomPerson {
  constructor(firstName, lastName, age, nationality, livesIn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
    this.livesIn = livesIn;
  }

  greeting() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.nationality} and I live in ${this.livesIn}. I am ${this.age}`
    );
  }

  itsYourBirthday() {
    // this.age++;
    this.age = this.age + 1;
  }

  changeCountry(newCountry) {
    this.livesIn = newCountry;
  }
}

const chris = new ZoomPerson("Chris", "Toth", 28, "English", "Spain");
console.log("chris:", chris);
const amy = new ZoomPerson("Amy", "Andersern", 21, "Australian", "Germany");
console.log("amy:", amy);
const noemi = new ZoomPerson("Radvan", "Noemi", 22, "Hungarian", "Netherlands");
console.log("noemi:", noemi);
noemi.greeting();
noemi.itsYourBirthday();
noemi.greeting();
amy.greeting();
chris.greeting();
chris.changeCountry("Somewhere like the Bahamas");
chris.greeting();

const classroom = [
  chris,
  amy,
  noemi,
  new ZoomPerson("Anna", "Velarde", 20, "Spanish", "UK"),
  new ZoomPerson("Marie-Frederique", "Luce", 18, "French"),
];
console.log("classroom:", classroom);
// const amy = {
//   firstName: "Amy",
//   lastName: "Andersen",
//   nationality: "Australian",
//   age: 21,
//   livesIn: "Germany",
//   greeting() {
//     // console.log(`Howdy mate, my name is ${this.firstName}`);
//     console.log(this);
//   },
// };

console.clear();

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
    this.lives = 1;
  }

  sleep() {
    console.log("zzzzzzz...  zzzzzzzz");
  }
}

const snoopy = new Animal("snoopy", 4);
console.log("snoopy:", snoopy);

class Cat extends Animal {
  constructor(name, legs) {
    super(name, legs);
    this.lives = 9;
  }
}

const garfield = new Cat("Garfield", 4);
console.log("garfield:", garfield);

snoopy.sleep();
garfield.sleep();

class Dog extends Cat {
  constructor(name, legs, random) {
    super(name, legs);
    // this.name = name
    // this.legs = legs
    this.goodBoy = true;
    this.random = random;
  }
}

class CuteDoggo extends Dog {
  constructor(name) {
    super(name, 4, 123213);
  }
}

const doggo = new Dog("doggo", 4, 287462437861);
console.log("doggo:", doggo);
doggo.sleep();

const cuteDoggo = new CuteDoggo("Boris");
console.log("cuteDoggo:", cuteDoggo);

console.clear();

class Player {
  constructor(name) {
    this.name = name;
    this.money = 200;
    this.position = 0;
  }

  walk(numberOfSteps, boardSize) {
    if (this.position + numberOfSteps >= boardSize) {
      this.money += 10;
      console.log("CHACHING 💰💸");
    }
    // else {
    //   this.position += numberOfSteps;
    // }
    this.position = (this.position + numberOfSteps) % boardSize;
    console.log(`${this.name} has walked ${numberOfSteps} steps`);
    console.log(`${this.name.toUpperCase()} position: ${this.position}`);
  }
}

class Game {
  constructor(playerArr) {
    this.boardSize = 16;
    this.players = playerArr; // [new Player("Juan"), new Player("Daniel"), etc]
  }
  // from google: Returns a random number between 6 and 1
  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  // iterates over every player and calls their `walk` method with a random value
  playRound() {
    // for (let i = 0; i< this.players.length; i++) {
    //   const player = this.players[i]
    // const diceValue = this.rollDice();
    //   player.walk(diceValue, this.boardSize)
    // }
    for (const player of this.players) {
      const numberOfSteps = this.rollDice();
      player.walk(numberOfSteps, this.boardSize);
    }
    // this.players.forEach((player) => {
    //   const diceValue = this.rollDice();
    //   player.walk(diceValue);
    // });
  }
  // given an x number of rounds plays it x times of rounds
  playXAmountOfRounds(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
      this.playRound();
    }
    this.players.forEach((player) => {
      console.log(`${player.name} has ${player.money}`);
    });
  }
}

const player1 = new Player("Juan");
const player2 = new Player("Daniel");

const game = new Game([player1, player2]);
// const game = new Game([player1]);
game.playXAmountOfRounds(50);
