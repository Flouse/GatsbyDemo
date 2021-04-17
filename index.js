// As you might guess, this program will always print setTimeout before setImmediate because the expired timer callbacks are processed before immediates. But the output of this program can never be guaranteed! If you run this program multiple times, you will get different outputs.

// setTimeout(function() {
// 	console.log('setTimeout')
// }, 1);
// setImmediate(function() {
// 	console.log('setImmediate')
// })

////////////////////////////////////
// it is guaranteed that the immediate callback will be definitely called before the timer callback.
// const fs = require('fs');

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout')
//     }, 0);
//     setImmediate(() => {
//         console.log('immediate')
//     })
// });

//////////////////////////////////
/**
 * this is process.nextTick 1
 * this is process.nextTick 2
 * this is process.nextTick 3
 * this is process.nextTick 4
 * this is the inner next tick inside next tick
 * this is set timeout 1
 * this is set timeout 2
 * this is process.nextTick added inside setTimeout
 * this is set timeout 3
 * this is set timeout 4
 * this is set timeout 5
 * this is set immediate 1
 * this is set immediate 2
 * this is set immediate 3
 */
 setImmediate(() => console.log('this is set immediate 1'));
 setImmediate(() => console.log('this is set immediate 2'));
 setImmediate(() => console.log('this is set immediate 3'));
 
 setTimeout(() => console.log('this is set timeout 1'), 0);
 setTimeout(() => {
		 console.log('this is set timeout 2');
		 process.nextTick(() => console.log('this is process.nextTick added inside setTimeout'));
 }, 0);
 setTimeout(() => console.log('this is set timeout 3'), 0);
 setTimeout(() => console.log('this is set timeout 4'), 0);
 setTimeout(() => console.log('this is set timeout 5'), 0);
 
 process.nextTick(() => console.log('this is process.nextTick 1'));
 process.nextTick(() => {
		 process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick'));
 });
 process.nextTick(() => console.log('this is process.nextTick 2'));
 process.nextTick(() => console.log('this is process.nextTick 3'));
 process.nextTick(() => console.log('this is process.nextTick 4'));