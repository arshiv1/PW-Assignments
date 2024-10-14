const os = require('os');

const hostname = os.hostname();
console.log("Hostname : ", hostname);

const platform = os.platform();
console.log("Platfomr : ", platform);

const totalMemory = os.totalmem();
console.log("Total Memory : ", totalMemory);

const freeMemory = os.freemem();
console.log("Free Memomry : ", freeMemory);

const userInfo = os.userInfo();
console.log('User Info:', userInfo);