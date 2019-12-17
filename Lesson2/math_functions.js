// # ES6: Use export to Share a Code Block

// One-Way
export const add = (x, y) => {
    return x + y;
}

// Second-Way
const add = (x, y) => {
    return x + y;
}
  
export { add };

// Third-Way
export { add, subtract };




