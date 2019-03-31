var fs = require('fs');

let str = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ.,(){}[]/?!@#$%^&*_-+="
let a = JSON.parse(fs.readFileSync('file.txt', 'utf-8'))
a = a.split(', ')
var s = ""
for (var k = 0; k < a.length; k++) {
	for (var i = 0; i < str.length; i++) {
		if (i == a[k]){
			s += str[i];
		}
	}
}
console.log(s);
// fs.writeFileSync("file.txt", JSON.stringify(s))