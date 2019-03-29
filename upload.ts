var req = require('request');
var war = require('colors');
var f = require('fs');
var x = require('exit');
var r = require('readline');

console.log(war.rainbow("▄︻̷┻̿═━一 Upload Finder By Fajar Firdaus"));
console.log(war.gray("[===================]"));
console.log(war.blue("Coder : Fajar Firdaus"));
console.log(war.blue("FB : Fajar Firdaus"));
console.log(war.blue("YT : iTech7732"));
console.log(war.blue("IG : fajar_firdaus_7"));
console.log(war.gray("[===================]"));
const a = r.createInterface({
    input : process.stdin,
    output : process.stdout
});

a.question("Masukan Url : ", (url) => {

let w = r.createInterface({
    input : f.createReadStream("up.txt")
});

w.on("line", (line) => {

req(`${url}` + "/" + `${line}`, function(error, response, body){
    if (response.statusCode == 200){
        console.log(`${url}` + "/" +`${line}`, war.rainbow(" [+] Upload Found !"));
    }else{
        console.log(`${url}` + "/" +`${line}`, war.red(" [+] Not Found !"));
    }
});
});
});