console.log(`utils.js is working`);

const square = (x) => x*x;

const add = (a , b) => a+b;

const subtract = (a, b) => a-b;

// export default (a, b) => a-b;


export { square, add, subtract as default };

//default export name does not matter on import