var fs = require('fs');

let str = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ.,(){}[]/?!@#$%^&*_-+="
let a = "Скелет конечностей образован скелетом пояса конечностей и скелетом свободных конечностей. Плечевой пояс лежит в толще мускулатуры и включает парные лопатки, ключицы и вороньи кости, соединённые с грудиной. Скелет передней конечности состоит из плеча (плечевая кость), предплечья (лучевая и локтевая кости) и кисти (кости запястья, пястья и фаланги пальцев). Тазовый пояс состоит из парных подвздошных, седалищных и лобковых костей, сросшихся между собой. Он прикреплён к крестцовому позвонку через подвздошные кости. В состав скелета задней конечности входят бедро, голень (большая и малая берцовая кости) и стопа (кости предплюсны, плюсны и фаланги пальцев). У бесхвостых кости предплечья и голени сливаются. Все кости задней конечности сильно удлинены, образуя мощные рычаги для передвижения прыжками."
var s = ""
for (var k = 0; k < a.length; k++) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] === a[k]) {
			s += i + ', ';
		}
	}
}
console.log(s);
fs.writeFileSync("file.txt", JSON.stringify(s))