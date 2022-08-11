const {cpfs,ips } = require('./base') 

// console.log(cpfs,ips)

// console.log(cpfs.match(/\d{3}\.\d{3}.\d{3}\-\d{2}/g));
// console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

// console.log(ips.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g));
// console.log(ips.match(/\d*\.\d*\.\d*\.\d*/g));
// console.log(ips.match(/(\d*\.){3}\d*/g));

/*
250 - 255 25[0-5]
200 - 249 2[0-4][0-9]
100 - 199 1\d{2}
10 - 99 [1-9]\d
0 - 9 \d
*/

const regExp = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

for (let i = 0 ; i < 300;i++){
    const ip = `${i}.${i}.${i}.${i}`
    console.log(ip, ip.match(regExp)); 
}