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
//#endregion

//#region
// konsola adiniz is a JS developer cixsin
function logGreeting(){
    return('Bayramov Rufat is a JS developer');
}
console.log(logGreeting())
//#endregion

//#region
// Istifadeci adini parametr kimi qebul eden funksiya yazin
function usrFntcn(name){
    console.log(`${name} is active now`)
}
usrFntcn("Rufat");
usrFntcn("Metin")
//#endregion

//#region
//3 eded daxil et en boyuyu konsola cixsin
function bigNumber(a,b,c){
    if(a>b &&  a>c){
        console.log(`${a} en boyuk ededdir`);
    }else if(b>a && b>c){
        console.log(`${b} en boyuk ededdir`);
    }else{
        console.log(`${c} en boyuk ededdir`);
    }     
}
bigNumber(5,4,8);
bigNumber(12,27,22);
//#endregion

//#region
// butun hesablar rubl kimi versin
let rubl = +prompt("rubl daxil et");
let dolar = +prompt("dollar daxil et")
let bos = 0;
function valyuta(dolar,umumi){
    umumi = rubl +  dolar*75;
    console.log(`Butun mebleg: ${umumi}`)
}
valyuta(dolar,bos);
//#endregion

//#region
//klavyaturada 1-den 99a daxil edilmis ededi herfler yazdir
function numberToText(num){
    switch(num){
        case "1":
            return('bir');
        case "2":
            return('iki');
        case "3":
            return('uc');
        case "4":
            return('dord');
        case "5":
            return('bes');
        case "6":
            return('alti');
        case "7":
            return('yeddi');
        case "8":
            return('sekkiz');
        case "9":
            return('doqquz');
        case "10":
            return('on');
        case "20":
            return('iyirmi');
        case "30":
            return('otuz');
        case "40":
            return('qirx');
        case "50":
            return('elli');
        case "60":
            return('altmis');
        case "70":
            return('yetmis');
        case "80":
            return('seksen');
        case "90":
            return('doxsan');
        default:
            return('bir ve ya iki reqemli eded daxi et')
    }
}
let addnum = prompt('bir ve ya iki reqemli eded daxil et');
if(addnum.length == 1 || addnum%10 == 0) {
    console.log(numberToText(addnum));
}else if(addnum.length == 2){
       let qaliq = +addnum % 10;
       let hesab = +addnum - qaliq;
       console.log( numberToText(String(hesab)) , numberToText(String(qaliq)));
}
else{
    console.log('Duz tetbiq etmediniz')
}
//#endregion

//#region
// Parametr kimi iki eded qebul eden ve onlarin en kiciyini qaytaran funksiyani tertib et
function min(ilkreqem,ikincireqem){
    let minNum= ilkreqem>ikincireqem ? ikincireqem : ilkreqem ;
    return minNum;
}
let ilkreqem = +prompt('Ilk reqemi yaz');
let ikincireqem = +prompt('Ikinci reqemi yaz');
console.log(min(ilkreqem,ikincireqem))
//#endregion


//#region
//Telefon nomresi 11 reqemden ibaret olsunve +7 ile baslasin
function isvalidnumber(tel){
    if((tel.length == 12) && (tel.startsWith("+7"))){
        return true;
    }else{
        return false;
    }
}
let resalt=isvalidnumber(prompt("nomre daxil et"));
console.log(resalt);
//#endregion


//#region
//iki reqemli ededi uc reqemli olana qeder artir
function twoToThree(num){
    if (num.length==2){
        while(num<100){
            num=+num+7;}
            return num;
    }else{
        alert('yazdigin reqem 2 reqemli deyil');
    }
}
let result = twoToThree(prompt('2 reqemli eded daxil et'));
console.log(result)
//#endregion



//#region
// Sonu 0 ile biten butun 3reqemli edeleri konsola cixar
function endsZero(){
    let i=100;
    while(i<999){
        if(i%10 == 0){
            console.log(i);
        }
        i++;
    }
}
endsZero();


// #region
// Metn elementleri tersine yazilsin
let text=prompt("Enter the text..")
for(i=text.length;i>=0;i--){
    console.log(text[i])
}
//#enrregion
*/
//#region
let text1 = prompt('salam.ey.dunya');
for(i=0; i<=text1.length;i++){
    if(text1[i] =="."){
       console.log(i)
    }
}














