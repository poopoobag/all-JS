// var a = 7;
// var b = 5;
// var p = (a+b)*2;
// var s = a*b;
// var a2 = a**2;
// var b2 = b**2;
// var c2 = (a**2)+(b**2);
// var c = c2**(1/2);
// // var c = (a**2 + b**2) ** (1/2);
// console.log("Untsugtiin talbai: " + s);
// console.log("Untsugtiin perimetr: " + p);
// console.log("untsugtiin diagnol: " + c);

// var nas = 16;
// if(nas >= 18){
//     console.log("Adult")
// } else {
//     console.log("Child")
// }

// var one = 1.2;
// var sec = 1.5;
// var thre = 1.1;
// var four = 2;
// var five = 2.2;
// var six = 0.8;
// var seven = 0.7;
// var eight = 0.75;
// var nine = 0.6;
// var ten = 0.5;

// var ave = (one+sec+thre+four+five+six+seven+eight+nine+ten) / 10;

// console.log("Average salary: " + ave);

// var a = 0.85;

//  if(ave <= a){
//      console.log("lower than the average amount")
//  } else {
//      console.log("higher than the average salary")
//  }

// var nas = prompt("include age");
// if(nas >=0){
//     if(nas >=50){
//         console.log("old age")
//     } else if(nas >=13 && nas <=19){
//         console.log("teenager")
//     } else if(nas >=20 && nas <=49){
//         console.log("adult")
//     } else {
//         console.log("child")
//     }
// } else {
//     console.log("buruu oruulsan bn")
// }

// var nas = prompt("nasaa oruul");
// if(nas >=0){
//     if(nas <=3){
//         console.log("nyalh ue")
//     } else if(nas >=3 && nas <=7){
//         console.log("balchir nas")
//     } else if(nas >=8 && nas <=12){
//         console.log("baga nas")
//     } else if(nas >=13 && nas <=17){
//         console.log("Ulii huu")
//     } else if(nas >=18 && nas <=25){
//         console.log("Ori zaluu nas")
//     } else if(nas >=25 && nas <=35){
//         console.log("Zaluu nas")
//     } else if(nas >=35 && nas <=45){
//         console.log("Ider nas")
//     } else if(nas >=45 && nas <=60){
//         console.log("hijeel nas")
//     } else if(nas >=60 && nas <=80){
//         console.log("Utul nas")
//     } else {
//         console.log("Undur nas")
//     }

// } else {
//     console.log("buruu oruulsan bn")
// }

// var counter = 0;
// for(var i = 0; i < 101; i++){
//     if(i%3 === 0 && i%2 ===0){
//         counter+=i
//     }
// }

// var counter = 0;
// for(var i = 1; i < 101; i++){
//     var dividers = 0;
//     for(var j=1; j <= i; j++){
//        if(i%j === 0){
//            dividers++
//        }
//     }
//     if(dividers === 2 || dividers === 1){

//         counter+=i
//     }
// }

// var word = "lollypop";
// for( var i = 0; i < word.length; i++)
// console.log(word[i]);

// var x = prompt("first number");
// var y = prompt("2 number");
// var z = prompt("3 number");

// var counter = 0;
// bodlogo 1
// if(+x === 0){
//     counter++;
// }
// if(+y === 0){
//     counter++;
// }if(+z === 0){
//     counter++;
// }

// bodlogo 2
// for(var i = 0; i < 101; i++){
//     if(i >=10 && i < 100){
//         console.log(i)
//     }
// }

// bodlogo1

// var neg = 89;
// var second = 120;
// var third = 103;

// var aveScore = (neg+second+third)/3;

// console.log("Batiin bagiin dundaj onoo : " + aveScore);

// var neg = 116;
// var second = 94;
// var third = 123;

// var aveScore = (neg+second+third)/3;

// console.log("Suhiin bagiin dundaj onoo : " + aveScore);

// // bodlogo2

// var Bat = 104;
// var Suh = 111;
// if(Bat < Suh){
//     console.log("Suh yalagch " + 111)
// } else if(Suh < Bat){
//     console.log("Bat yalagch " + 104)
// }

// // bodlogo 3

// var x = +prompt("1 onoo");
// var y = +prompt("2 onoo");
// var z = +prompt("3 onoo");

// var team1 = (x + y + z)/3;

// console.log("Ehnii bagiin dundaj point : " + ' ' + team1);

// var a = +prompt("1 onoo");
// var b = +prompt("2 onoo");
// var c = +prompt("3 onoo");

// var team2 = (a + b + c)/3;

// console.log("Daraagiin bagiin dundaj point : " + ' ' + team2);

// if(team1 < team2){
//     console.log("yalagch bag : " + team2);
// } else if(team2 < team1){
//     console.log("yalagch bag : " + team1);
// }

// // bodlogo4

// var neg = 97;
// var second = 134;
// var third = 105;

// var aveScore = (neg+second+third)/3;

// console.log("tsetsgiin bagiin dundaj onoo : " + aveScore);

// var BAT = 104;
// var SUH = 111;
// var TSETSEG = 112;

// if(BAT <= TSETSEG && SUH <= TSETSEG){
//     console.log("Tsetsgiin bag yalagch " + 112);
// } else if(TSETSEG < BAT && TSETSEG < SUH){
//     console.log("Suhiin bag yalagch " + 111);
// }

// var word = "nyamgerel";
// for( var i = 0; i < word.length; i++)
// console.log(word[i]);

// var array = ["naya", 55, true, "100", false];
// for( var i = 0; i < array.length; i++)
// console.log(typeof array[i]);

// var array = ["naya", 55, true, "100", false];
// for( var i = 0; i < array.length; i++){
//     if(typeof array[i] === 'string'){
//         console.log(array[i])
//     }
// }

// for of davtalt
// var array = ["naya", 55, true, "100", false, 100];
// for(el of array){
//     if(typeof el === 'number'){
//         console.log(el)
//     }
// }

// var array = ["naya", 55, true, "100", false, 100];
// var random = parseInt(Math.random() * array.length);
// console.log(array[random])

// 1

// var Ner = "Naya";
// var nNer = ["Nice", "Neat", "Normal", "Nostalgic", "Nonstop"];
// var aNer = ["amazing", "awesome", "activist", "admiring", "angel"];
// var yNer = ["young", "yummy", "youthful", "yeaming", "yankee"];
// var aNer1 = ["adorable", "attractive", "affectionate", "alluring", "abloom"];
// for( var i = 0; i < Ner.length; i++){
//
//     if(Ner[i] === "N"){
//         console.log("N: " + nNer[random])
//     }
//     else if(Ner[i] === "a"){
//         console.log("a: " + aNer[random])
//     }
//     else if(Ner[i] === "y"){
//         console.log("y: " + yNer[random])
//     }
//     else if(Ner[i] === "a"){
//         console.log("a: " + aNer1[random])
//     }

// }

// var gg = prompt('Neree oruulna uu');
// var aLTR = ["adorable", "attractive", "affectionate", "alluring", "abloom"];
// var bLTR = ["beautiful", "bright", "balanced", "bold", "bitchy"];
// var cLTR = ["cute", "cool", "confident", "calm", "capable"];
// var dLTR = ["darling", "dreamy", "dope", "deadly", "delicate"];
// var eLTR = ["enthusiastic", "exotic", "expert", "energitic", "entertainer"];
// var fLTR = ["flirty", "funny", "fast", "fearless", "fit"];
// var gLTR = ["grateful", "gorgeous", "great", "gang", "GG"];
// var hLTR = ["hot", "handsome", "handy", "helpful", "healthy"];
// var iLTR = ["intelligent", "interesting", "imaginative", "idealistic", "incredible"];
// var jLTR = ["juicy", "jaming", "joyful", "jealous", "jerky"];
// var kLTR = ["killer", "kind", "knighty", "knowing", "kissy"];
// var lLTR = ["loud", "loopy", "loving", "luxury", "lucky"];
// var mLTR = ["moody", "mysterious", "mindful", "marvelous", "motivated"];
// var nLTR = ["noisy", "nice", "Neat", "Normal", "Nostalgic"];
// var oLTR = ["offensive", "obsolete", "odd", "overjoyed", "orgonized"];
// var pLTR = ["peaceful", "patient", "persistant", "polite", "playful"];
// var qLTR = ["quiet", "quick", "quantal", "queenly", "quiter"];
// var rLTR = ["reasonable", "radiant", "rare", "respectful", "rich"];
// var sLTR = ["super", "sun", "sophisticted", "splendid", "smiling"];
// var tLTR = ["tall", "timid", "tiny", "toxic", "talented"];
// var uLTR = ["unafraid", "upbeat", "unlimited", "unique", "united"];
// var vLTR = ["visionary", "viral", "vegetarian", "vibrant", "valuable"];
// var wLTR = ["wonderful", "wanted", "wealthy", "weak", "warm"];
// var xLTR = ["xeric", "xany", "xenial", "xenophobic", "xystus"];
// var yLTR = ["young", "yummy", "youthful", "yeaming", "yankee"];
// var zLTR = ["zestful", "zany", "zooty", "zonked", "z"];

// for( var i = 0; i < gg.length; i++){
//     var random = parseInt(Math.random() * 5);
//     if(gg[i] === "a"){
//         console.log("a: " + aLTR[random])
//     }
//     else if(gg[i] === "b"){
//         console.log("b: " + bLTR[random])
//     }
//     else if(gg[i] === "c"){
//         console.log("c: " + cLTR[random])
//     }
//     else if(gg[i] === "d"){
//         console.log("d: " + dLTR[random])
//     }
//     else if(gg[i] === "e"){
//         console.log("e: " + eLTR[random])
//     }
//     else if(gg[i] === "f"){
//         console.log("f: " + fLTR[random])
//     }
//     else if(gg[i] === "g"){
//         console.log("g: " + gLTR[random])
//     }
//     else if(gg[i] === "h"){
//         console.log("h: " + hLTR[random])
//     }
//     else if(gg[i] === "i"){
//         console.log("i: " + iLTR[random])
//     }
//     else if(gg[i] === "j"){
//         console.log("j: " + jLTR[random])
//     }
//     else if(gg[i] === "k"){
//         console.log("k: " + kLTR[random])
//     }
//     else if(gg[i] === "l"){
//         console.log("l: " + lLTR[random])
//     }
//     else if(gg[i] === "m"){
//         console.log("m: " + mLTR[random])
//     }
//     else if(gg[i] === "n"){
//         console.log("n: " + nLTR[random])
//     }
//     else if(gg[i] === "o"){
//         console.log("o: " + oLTR[random])
//     }
//     else if(gg[i] === "p"){
//         console.log("p: " + pLTR[random])
//     }
//     else if(gg[i] === "q"){
//         console.log("q: " + qLTR[random])
//     }
//     else if(gg[i] === "r"){
//         console.log("r: " + rLTR[random])
//     }
//     else if(gg[i] === "s"){
//         console.log("s: " + sLTR[random])
//     }
//     else if(gg[i] === "t"){
//         console.log("t: " + tLTR[random])
//     }
//     else if(gg[i] === "u"){
//         console.log("u: " + uLTR[random])
//     }
//     else if(gg[i] === "v"){
//         console.log("v: " + vLTR[random])
//     }
//     else if(gg[i] === "w"){
//         console.log("w: " + wLTR[random])
//     }
//     else if(gg[i] === "x"){
//         console.log("x: " + xLTR[random])
//     }
//     else if(gg[i] === "y"){
//         console.log("y: " + yLTR[random])
//     }
//     else if(gg[i] === "z"){
//         console.log("z: " + zLTR[random])
//     }

// }

// [5, 6, 0, 1, 2, 7] target=9;

// var array = [5, 6, 0, 1, 2, 7];
// var sum = 9;
// var action = (a + b === sum);
// for(var i = 0; i < array.length; i++){
//      var random = parseInt(Math.random() * 6);
//      if(array[i] === action){
//             console.log(action === sum)
//        }
// }

// var a1 = 5;
// var a2 = 6;
// var a3 = 0;
// var a4 = 1;
// var a5 = 2;
// var a6 = 7;
// var b = 9;

// var sum1 = a1 + a2;
// var sum2 = a1 + a3;
// var sum3 = a1 + a4;
// var sum4 = a1 + a5;
// var sum5 = a1 + a6;
// var sum6 = a2 + a3;
// var sum7 = a2 + a4;
// var sum8 = a5 + a6;

// if(sum1 === b){
//     console.log(sum1);
// } else if(sum2 === b){
//     console.log(sum2);
// } else if(sum3 === b){
//     console.log(sum3);
// } else if(sum4 === b){
//     console.log(sum4);
// } else if(sum5 === b){
//     console.log(sum5);
// } else if(sum6 === b){
//     console.log(sum6);
// } else if(sum7 === b){
//     console.log(sum7);
// } else if(sum8 === b){
//     console.log(sum8 + " target");
// }

// array + push

// pop

// var arr = [5, 6, 7, 8, 9];

// arr.pop();
// arr.pop();

// //  unshift

// [5, 6, 0, 1, 2, 7] target=9; orolt
// i = 0 ued 0 indextei element 5 bna
// 5+6 5=0 5+1 5+2 5+7;
// i = 1ued 1  indextei element 6 bna
// garalt : [4,5] index

// let arr = [5, 6, 0, 1, 2, 7];
// let target = 9;

// let result = []

// for(let i =0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             result.push(i, j);
//         }
//     }
// }

// console.log(result)

// let arr = ["Ulaanbaatar", 123, true, "Beijing", 258, "Tokyo", false, "Seoul"];
// let result = [];

// for( let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string'){
//            result.push(arr[i])
//         }
//     }

// let email = prompt("haih email oruul");
//  let user = {
//     ner : "Narada",
//     mergejil : "Teacher",
//     cell : "789456",
//     email : "Narada123mail.com"
//  }

//  let user1 = {
//     ner : "Nyamka",
//     mergejil : "Freelancer",
//     cell : "123456",
//     email : "poopoobag@gmail.com"
// }

// let user2 = {
//     ner : "Phoebe",
//     mergejil : "Singer",
//     cell : "0012332",
//     email : "Phoebe12gmail.com"
// }

// let user3 = {
//     ner : "Ross",
//     mergejil : "Designer",
//     cell : "205090541",
//     email : "Ross@gmail.com"
// }

// let user4 = {
//     ner : "Rachel",
//     mergejil : "Waitress",
//     cell : "78794949",
//     email : "Rachel@gmail.com"
// }

// let users = [user, user1, user2, user3, user4];

// for(let i = 0; i < users.length; i++){
//     if(users[i].email === email){
//         console.log(users[i]);
//     }
// }

// let tip1 = 9.6;
// let tip2 = 18.6;
// let tip3 = 26.8;

// let gg = {
//     ner: "Bat",
//     tootsoo: [124, 48, 268],
//     tip: [],
//     finalBill: []
// }

// for(let i = 0; i < gg.tootsoo.length; i++){
//     let percentage = 0;
//     if(gg.tootsoo[i] <= 50){
//         percentage = .2;
//         gg.tip.push(gg.tootsoo[i] * percentage);
//         gg.finalBill.push(gg.tootsoo[i] + gg.tip[i]);
//     } else if(gg.tootsoo[i] > 50 && gg.tootsoo[i] < 200){
//         percentage = .15;
//         gg.tip.push(gg.tootsoo[i] * percentage);
//         gg.finalBill.push(gg.tootsoo[i] + gg.tip[i]);
//     } else {
//         percentage = .1;
//         gg.tip.push(gg.tootsoo[i] * percentage);
//         gg.finalBill.push(gg.tootsoo[i] + gg.tip[i]);
//     }

// }

//  FUNCTION

// function myFunction(){
//     let tursunOn = 2000;
//     let nas = 2021 - tursunOn;

//     return nas;

//     // console.log(nas)= came with undefines result too
// }
//  let x = myFunction();

// //  parameter function

// function nasTootsoh(on){

//     return 2021 - on;
// }

// let person1 = nasTootsoh(2000);
// let person2 = nasTootsoh(2001);
// let person3 = nasTootsoh(1997);
// let person4 = nasTootsoh(1995);

// 3 too oruullaad hed ni 0 tei tentsuu baigaaga haruul
// orolt : 1, 0, 5; garalt :1
// orolt: 5, 3, 1; garalt :0

// 1.  3 shirheg too argument helbereer avdag function bich.

// 2. toologch huvisagch uusge - counter.

// 3. ehnii toog 0 tei = esehig shalgaad herev tentsuu bol tooluuriin utgiig negeer nemegduul.

// 4. 2dahi toog 0 tei = esehig shalgaad herev tentsuu bol tooluuriin utgiig negeer nemegduul.

// 5. 3dahi toog 0 tei = esehig shalgaad herev tentsuu bol tooluuriin utgiig negeer nemegduul.

// 6. tooluuriin utgiig butsaa.

// function gg(too1, too2, too3){
//     let counter = 0;
//     if(too1 === 0){
//         counter ++;
//     }
//     if(too2 === 0){
//         counter ++;
//     }
//     if(too3 === 0){
//         counter ++;
//     }

//     return counter;
// }

// function lol(a, b){
//     return a**b;
// }

// function number(z){
//     return z.toString().length;
// }

// function number(b){
//     let lol = 0;
//     for(let i = 0; i < b.toString().length; i++ ){
//         lol += +b.toString()[i]
//     }

//     return lol;
// }

// function number(a) {
//   let gg = 0;
//   for (let i = 0; i < a.toString().length; i++) {
//       if(a.toString()[i]%3 === 0){
//           gg++;
//       }
//   }

//   return gg;

// }


// function number(a) {
//   let gg = 0;
//   for (let i = 0; i < a.toString().length; i++) {
//       if(a.toString()[i]%2 === 0){
//           gg += +a.toString()[i]
//       }
//   }

//   return gg;

// }



// function number(a){
//     return a === +a.toString().split("").reverse().join("");
// }

 

// function number(z){
//     let gg = 0;
//     for (let i = 1; i <= z; i++){

//         if(z%i === 0){
//             gg++;
//         }
//     }
//     return gg;
// }



// function number(z){
//         let gg = 0;
//         for(let i = 1; i <= z; i++){
//             if(z%i === 0){
//                 gg++
//             }
//         }
//         if(gg === 1 || gg === 2){
//             return true
//         }
//         return false;
// }

// ugugdsun too hurtelh buh toog hoorond ni urjuuleh
// function factorial(num){
//     if(num === 1){
//         return num;
//     }
//     return num * factorial(num - 1)
// }

// ugugdsun too hurtelh buh toog hoorond ni nemeh
// function addUpTo(num){
//     if(num === 0){
//         return num;
//     }
//     return num + addUpTo(num - 1)
// }