function curr(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}
function add(a, b) {
    return a + b;
}
const curriedAdd = curr(add);
console.log(curriedAdd(2)(3));      // Output: 5
console.log(curriedAdd(2, 3));      // Output: 5
console.log(curriedAdd(2)(3, 4));   // Output: 5
