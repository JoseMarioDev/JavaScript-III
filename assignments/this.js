/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window binding
 * 2. implicit binding
 * 3. new binding
 * 4. explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

function myName(name) {
  console.log(this);
  return name;
}
myName('Jose');

// Principle 2

const object = {
  greeting: 'Hi',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
  }
};
object.sayHello('Jose');

// Principle 3

function baseballPlayer(player) {
  this.greeting = ' is good at baseball';
  this.player = player;
  this.speak = function() {
    console.log(this.player + this.greeting);
  };
}

const anthonyRizzo = new baseballPlayer('Rizzo');
const krisBrant = new baseballPlayer('KB');
anthonyRizzo.speak();
krisBrant.speak();

// Principle 4

anthonyRizzo.speak.call(krisBrant);
krisBrant.speak.apply(anthonyRizzo);
