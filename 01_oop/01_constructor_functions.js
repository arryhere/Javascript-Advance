function Aggregator(value_1, value_2, value_3 = 0) {
  this.value_1 = value_1;
  this.value_2 = value_2;
  this.value_3 = value_3;
}

const aggregator_1 = new Aggregator('aggregator_1', true, 55);
const aggregator_2 = new Aggregator('aggregator_2', false);

console.log(aggregator_1);
console.log(aggregator_2);

aggregator_1.value_3 = 1000;

console.log(aggregator_1);
