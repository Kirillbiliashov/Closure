'use strict';

const array = () => {
const arr = [];
const wrapper = (i) => arr[i];
const methods = {
    get: (i) => arr[i],
    push: (val) => arr.push(val),
    pop: () => arr.pop() 
}
return Object.assign(wrapper, methods)
};

module.exports = { array };
