//#region
// Ədədlər üzərində əməliyyat; 5cic dereceden quvvet ve 3e bolunmeden qalan qaliq
/*let num = 25;
console.log(num**5);
console.log(25%3)

// Konsola mesaj cixar
let firstName = "Rufat";
let lastName = "Bayramov";
console.log(`Sizin adiniz ${firstName} ${lastName}. Tanisligimiza cox sadam`)
console.log(`Sizi bir daha gormeyimize sadiq, ${firstName} ${lastName}`)
//#endregion
//#region 
// Addaki herflerin sayini konsola cixar
let fullName = "Bayramov Rufat";
let numberOfEach = fullName.length-1;
console.log(numberOfEach);
//#endregion

//#region 
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
//#endregion

//#region
//Fullname reversed
let full_Name = 'Bayramov Rufat';
let array_name = full_Name.split(' ');
let revers = array_name.reverse();
let newArray = revers.join(' ');
console.log(newArray)
//#endregion

//#region
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
//#endregion

//#region
//yasi yoxla
let age = Number(prompt("yasi daxil et"));
if(age>20){
    alert("yasin 20den bpyukdur")
}else{
    alert("yasin 20den asagidir")
}
//#endregion

//#region
// uc reqemli eded daxil et orta reqemi tap
let userNum=prompt("Üç ikirəqəmli ədəd daxil edin..");
userNum=userNum.split(",");
let firstNum=+userNum[0];
let secondNum=+userNum[1];
let thirdNum=+userNum[2];
if ((firstNum==secondNum) || (secondNum==thirdNum) || (firstNum==thirdNum)){
    console.log("İki və ya üç daxil edilmiş ədəd eynidir")}
else{
    if ((firstNum>secondNum) && (firstNum>thirdNum)){
        if(secondNum>thirdNum){
            console.log(`Orta ədəd -${secondNum}-dir`)}
        else{
            console.log(`Orta ədəd -${thirdNum}-dir`)
        }
    }
    else if ((secondNum>firstNum) && (secondNum>thirdNum)){
        if (firstNum>thirdNum){
            console.log(`Orta ədəd -${firstNum}-dir`)
        }
        else{
            console.log(`Orta ədəd -${thirdNum}-dir`)
        }
    }
    else{
        if(secondNum>firstNum){
            console.log(`Orta ədəd -${secondNum}-dir`)
        }
        else{
            console.log(`Orta ədəd -${firstNum}-dir`)
        }
        }
} 
//#endregion

//#region
// reqem yaz herf cisin
let Nums = +prompt('reqem daxi let');
switch(Nums){
    case 1:
        console.log  ('bir');
        break;
    case 2:
        console.log ('iki');
        break;
    case 3:
        console.log ('uc');
        break;
    case 4:
        console.log ('dord');
        break;
    case 5:
        console.log('bes');
        break;
    default:
        alert('Yazdigin reqem 0-10 arasi deyil');
        break;
}
//#endregion

//#region
// istifadeciden cinsini oyren m ve f herfi al
let gender = prompt('Cinsini M ve ya F formasinda daxil et');
let gender_size = gender == 'M' ? "male" : "famele";
console.log(gender_size)
//#endregion

//#region
let month = prompt('Ay nomresini daxil et');
switch(month){
    case "1":
        console.log('Yanvar');
        break;
    case "2":
        console.log('Fevral');
        break;
    case "3":
        console.log('Mart');
        break;
    case "4":
        console.log('Aprel');
        break;
    case "5":
        console.log('May');
        break;
    case "6":
        console.log('Iyun');
        break;
    case "7":
        console.log('Iyul');
        break;
    case "8":
        console.log('Bir ilde 12 ay var')  
        break;
        default:
        console.log('Ilin 12 ayi var')          
}
//#endregion
*/
//#region
let zaman = prompt('Ayi YYYY.MM.DD kimi daxil et');
zaman = zaman.split('.');
let bir = zaman[0];
let iki = zaman[1];
let uc = zaman[2];
switch(iki){
    case "01":
        iki = "yanvar";
        break;
    case "02":
        iki = "fevral";
        break;
    case "03":
        iki = "mart";
        break;
    case "04":
        iki = "aprel";
        break;
    case "05":
        iki = "may";
        break;
    default:
        alert(" Sablona uygun yaz")
        
}
console.log(`${uc} ${iki} ${bir} cu il `)
