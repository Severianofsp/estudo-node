const { html } = require('./base') 

const regExp1 = /<.+>.+<\/.+>/g; // greedy
const regExp2 = /<.+?>.+?<\/.+?>/g; // non-greedy

console.log('greedy',html.match(regExp1));
console.log('non-greedy',html.match(regExp2));