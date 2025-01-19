console.log('Hi 0');

const res = await Promise.resolve('Hi 1');
console.log(res);

setTimeout(function settimeout() {
  console.log('Hi 2');
}, 0);

Promise.resolve('Hi 3').then(function promise_hi_3(resolve) {
  console.log(resolve);
});

Promise.resolve('Hi 4').then(function promise_hi_4(resolve) {
  console.log(resolve);
});

console.log('Hi 5');

/* 
Hi 0
Hi 1
Hi 5
Hi 3
Hi 4
Hi 2
*/

/* 
Code Execution Breakdown:

1. console.log('Hi 0'):
  > This is a synchronous log and executes immediately.
  > Logs: Hi 0

2. await Promise.resolve('Hi 1'):
  > The await pauses the execution of the rest of the main function until the promise resolves.
  > While the function is paused, other queued tasks (microtasks and synchronous code) may execute.
  > The promise resolves immediately with the value "Hi 1".
  > When the promise resolves, the function continues, and the value "Hi 1" is assigned to res.

3. setTimeout(function settimeout() { ... }, 0):
  > The setTimeout callback is scheduled and placed into the macrotask queue to execute, after the synchronous code and microtasks have finished.

4. Promise.resolve('Hi 3'):
  > This creates a promise that resolves immediately.
  > The .then callback (promise_hi_3) is added to the microtask queue.
  
5.Promise.resolve('Hi 4):
  > Similarly, this creates another promise that resolves immediately.
  > 4. Promise.resolve('Hi 3'):

6. console.log('Hi 5'):
  > This is a synchronous log, so it executes immediately.
  > Logs: Hi 5

--------------------------------------------------------------------------------------------------------------------------------------------

*/
