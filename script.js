// Ədədlər üzərində əməliyyat; 5cic dereceden quvvet ve 3e bolunmeden qalan qaliq
let num = 25;
console.log(num**5);
console.log(25%3)

// Konsola mesaj cixar
let firstName = "Rufat";
let lastName = "Bayramov";
console.log(`Sizin adiniz ${firstName} ${lastName}. Tanisligimiza cox sadam`)
console.log(`Sizi bir daha gormeyimize sadiq, ${firstName} ${lastName}`)
 
// Addaki herflerin sayini konsola cixar
let fullName = "Bayramov Rufat";
let numberOfEach = fullName.length-1;
console.log(numberOfEach);

//Ad soyad bas herfleri cixsin
let fullName_ = "Bayramov Rufat";
let space = fullName_.indexOf(' ');
let firstLetter = fullName_[0];
let lastLetter = fullName_[space+1];
console.log(`${firstLetter} ${lastLetter}`)
// second attempt
let array= fullName_.split(' ');
let second = array[0][0] + " " + array[1][0]
console.log(second);

//Fullname reversed
let full_Name = 'Bayramov Rufat';
let array_name = full_Name.split(' ');
let revers = array_name.reverse();
let newArray = revers.join(' ');
console.log(newArray)

//Qiymeti metn halina sal
let price = prompt("539.90 formatinda qiymet daxi ed");
let newPrice = price.split(".");
console.log(`${newPrice[0]} manat ${newPrice[1]} qepik`)

//Soyad ad ata bas herfleri cixar
let full_Names = prompt("Soyad ad ata adini daxil et");
let newPrice_ = full_Names.split(' ');
console.log(`${newPrice_[0]} ${newPrice_[1][0]}.${newPrice_[2][0]}. `)

//Muxtelif muqayise operatoru ile 5 ifade yaz
let value = Number(prompt("0dan 20ye qeder istenilen reqem elave et"));
console.log(value>=10);
console.log(value<15);
console.log(value=20);


//yasi yoxla
let age = Number(prompt("yasi daxil et"));
if(age>20){
    alert("yasin 20den bpyukdur")
}else{
    alert("yasin 20den asagidir")
}