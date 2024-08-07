const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');

let targetTimeZone;

if(process.argv.length != 3) {
    console.log("Usage : <script-file> <timezone>");
    process.exit(1);
} else {
    targetTimeZone = process.argv[2]; 
}

console.log(`Time at the ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);