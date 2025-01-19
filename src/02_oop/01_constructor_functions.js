function Maths(value_1, value_2, value_3 = 0) {
  this.value_1 = value_1;
  this.value_2 = value_2;
  this.value_3 = value_3;
  this.value_4 = 0;

  this.sum = function (input) {
    return this.value_1 + this.value_2 + this.value_3 + input;
  };

  this.sub = (input) => {
    return this.value_1 - this.value_2 - this.value_3 - input;
  };

  this.icr = () => {
    this.value_4 += 1;
    return true;
  };
}

const math_1 = new Maths(1, 2, 3);
const math_2 = new Maths(4, 5);

console.log({ math_1 }); // { math_1: Math { value_1: 1, value_2: 2, value_3: 3 }, ... }
console.log({ math_2 }); // { math_2: Math { value_1: 4, value_2: 5, value_3: 0 }, ... }

math_1.value_3 = 55;

console.log({ math_1 }); // { math_2: Maths { value_1: 4, value_2: 5, value_3: 0 }, ... }

console.log('--------------------------------------------------------------------------------------------------------');

console.log(math_1.sum(100)); // 158
console.log(math_1.sub(100)); // -156

console.log('--------------------------------------------------------------------------------------------------------');

console.log(math_1.value_4); // 0

math_1.icr();
math_1.icr();
math_1.icr();

console.log(math_1.value_4); // 3
console.log(math_2.value_4); // 0

console.log('--------------------------------------------------------------------------------------------------------');
