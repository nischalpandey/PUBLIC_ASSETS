

var last = 'Pandey';
var _1nis = 'Nepal';
var _1my___name = " 123";
var $7 = "jaho ho"
var age = 18;
var hi = true;
var helo = null;
var iamforhelp;
var x = 5;
var y = 6;

var num = 10;
var num_2 = ++num;

// console.log(10+10);
// console.log("ram"+ " hari")
// console.log(10+"11");
// bug... console.log(10-"8");

// console.log(_1nis)

//to find out type console.log(typeof(_1nis));

// console.log(hi);
// console.log(typeof(hi));
// console.log(typeof(age));

// console.log(helo);
// consple.log(iamforhelp);

// console.log(isNaN(age));
// console.log(isNaN(last));

// if(isNaN(last)){
// console.log("please enter valid no")
// }



// console.log("Answer is "+ (x+y) );
// console.log("Answer is "+ x+y );

// console.log(num_2);
// console.log(num);

// console.log(x==y);

// if (x != y) {
//     console.log("is true ")

// }

// using not equal to ... console.log(x != y  );
// console.log(x>y);
// using equalwith greater console.log(x <= y);

// dutai true .... console.log(x<y && y<0);
// console.log(x<y || y<0);
// true ko false false ko true console.log(!(x<y && y<0));


//power.....console.log(3**3);

// value change garna yo taraki .....


var a = 5;
var b = 6;
var c = b; // c=6
// b = a;
// a = c;
// console.log("This is value of a " + a);
// console.log("This is value of b " + b);

//double euqual to == cheack only value for eg number 5 == string 5 true ......and triple equal to === cheak all eg i sfalse here

// if (a==5) {
//     console.log("if working");

// } else {
//     console.log("else working");
// }

var year = 2011;



//using...........
//  if (year%4==0 ) {
//   if (year%100==0  ) {
//       if (year%400==0) {
//         console.log("Is 1 leap");   
//       } else {
//         console.log("Is Not leap");  
//       }
//   } else {
//     console.log("Is leap");
//   } 

// } else {
//     console.log("Is Not by 4leap");

// }

//shortcut if then.............😎 
// document.write((year%4==0)? "leap year":"not leap year");
// var vote=19;
//console.log((vote>=18)?"You can vote":"you cannot vote");

var area = "rectangle";
var pi = 3.142, l = 5, b = 10, r = 2;

// if (area=="circle"){
//   console.log("The are of circle = "+(pi*r**2)+"m2");
// }else if (area=="rectangle"){
//   console.log("This is rectangle = "+(l*b));
// }
// else if (area=="tringle"){
//   console.log("This is tringle");
// }
// else{ 
//   console.log("enter vlid info");
// }
//shortcut if else.................😎 😎 
//  switch (area) {
//    case "circle":console.log("this is circle");
//    break;
//     case"rectangle":console.log("This is rectangle");
//     break;
//     case"tringle":console.log("This is trangle");
//     break;

//     default:
//       console.log("Plese enter valid information");
//  }


//to print from 1 to 15...............
var no = 0;    //while loop banxa........yaslai
//  while (no<=15) {
//    console.log(no);
//    no++;

//  }
//do-while loop pani xa.......

//for loop...............😎 😎 

//  for(var forno=0; forno<=30; forno++){
//    console.log(forno);
//  }

//challange..😎 ...............time


//  for(no; no<=30; no++){
//    console.log(no+" multiply by 2 = "+no*2);
//  }

//  var tableof=6;
//  for (no; no<=10; no++){
//    console.log(tableof+ "*"+no+" = "+tableof*no);
//  }


//fucton................

// function total(a,b) {
//   var adding = a+b;
//   console.log(adding);
// }
//  total(50,50);
//  total(30,40);

//  fuction using return...............😎 

// function total(a,b) {
//    return adding = a+b; 
//  }

//  var fuNo = total(20,20);
//  console.log(total(20,20));
//  console.log(fuNo);


//function lai variable ma halne


// var funexp= function total(a,b) {
//   return adding = a+b; 
// }


// console.log(funexp(25,29));



//..................Let and const ................................😎 

// var name1 = "Nischal pamdey"
// console.log(name1);
// name1="PAndey ho"
// console.log(name1);

// let name1 = "Nischal pamdey"
// console.log(name1);
// name1="PAndey ho"
// console.log(name1);


// const name1 = "Nischal pamdey"
// console.log(name1);



// let ra const chai block scope ..... ane var chai function scope.........



// templete string//........................................😎 

// for (let no = 0; no <= 10; no++) {

//     // console.log("Table of " + "8" +"*"+ no + "="+no*8);
// console.log(`Table of 8 * ${no} = ${no*2}`);
// }


//Defult parameter pani xa function ko lagi...........


// fat arrow function😎 😎 

//normal function............

// function noo(a,b) {
// let total= a*b;
//     return`Multiply of ${a} and ${b}= ${total} `;
// }
// console.log(noo(2,6));

//using  flat arrow...................😎😎😎

// const noo = (a, b) => `Multiply of ${a} and ${b}= ${a*b} `;

// console.log(noo(2, 6));

//Array....................................

let mylang = ["java","phython","c program","react"];

// console.log(mylang[2]);
// console.log(mylang.length);
// console.log(mylang[mylang.length-3]);

// for(var no=0; no<mylang.length; no++){
//     console.log(mylang[no]);
// }

// for(let no in mylang){
//     console.log(no);
// }
// for(let no of mylang){    //...........element print😎
//     console.log(no)
// }
// mylang.forEach((element,index,array)=>console.log(`this is element ${element} index is ${index} and array is ${array} `)); ///😎😎😎


//.................add data in array...............

// let animal=['cow',"dog","ghoat"];
// animal.push("chicken","cat");
// for(let no of animal){    //.................add data at end using push
//         console.log(no)
// }
 

let animal=['cow',"dog","ghoat","pig"];
// animal.unshift("chicken","cat");
// for(let no of animal){    //.................add data at first using{ shift le first ko remove garxa} push
//         console.log(no)
// }
 


//pop remove element from array

// animal.pop();
// console.log(animal);

//splice method...........................................................😎😎😎


// animal.splice(2,1,"cat")         //..structure( update add , delete, string )
// console.log(animal);



// let change = animal.indexOf("dog");      // 😎

// console.log(change)

// if (change==1) 
// {animal.splice(2,1,"cat")    
//     console.log(animal);
// }else{
//     console.log('hello');
// }




// animal.map((element,index,array)=>console.log(`this is element ${element} index is ${index} and belongs to  ${array} `)); // using map
