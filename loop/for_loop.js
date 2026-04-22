
//  1 to print the multiplication of number
let num = 5;

for (let i = 1; i <= 10 ; i++){
    console.log (num +  "x" + i + " = " + ( num*i) )
}


//-2 -----calculate factorial given  number
 let a = 5;
 let fact = 1;
 
 for (let i =1; i<=a; i++){
//    console.log (fact = fact*i);
   fact = fact*i 
}
console.log(fact)


// 3 sum of natural number 
let b = 100;

let sum  = 0;
for(let i =1; i<=b ; i++){
sum = sum +i; 

 }
 console.log(sum);
 
 // 4 reverse of a number 

let rev = 0;
 let c = 1000;

 for (let i = c; i>0; i = Math.floor(i/10)){

    let lastDigit = i % 10;
    rev = rev * 10 + lastDigit;

 }
 console.log(rev);
 

 // 5 To print even number
 for(let i = 1; i<=10; i++){
   
    
     if (i%2 ===0) {
        console.log(i);
        
    }
    
 }


 // 6 count digit 
 let count = 0 ;
 let d = 876979;
 for (let i = d;i>0;i= Math.floor(i/10)){
    count++;
 }
 console.log(count);
 


 // 7  generate fibonacci n term
 // sum of previous two consecutive number
 let x = 0; z =7;
 let y = 1;
 for(let i =0; i<z;i++){
     console.log(x);
    let next = x+y;
x=y;
y = next;
 }
 


 //8 sum of digit 
 let s= 0 ;
 let n = 436;

 for (let i = n; i>0; i= Math.floor(i/10)) {
s = s + i%10;    
 
 console.log(s);
 }


//  =====9===pattern pyramid
let prompt = require('prompt-sync')();
let p = Number(prompt("enter a number  "));



for (let i = 1; i <= p; i++) {
   for (let j = 1; j <= p; j++) {
      process.stdout.write(" * ")
   }
   console.log();
   
}

//print pyramid pattern of *
let danish = require('prompt-sync')();
let m = Number(danish("enter a number  "));



for (let i= 1; i <= m ; i++) {

   

let row = "";
//for space 
for (let j = 1 ; j <= m-i; j++) {
row += "   ";

}
for(k = 1; k <= 2*i-1; k++){
   row += " * ";

}
// console.log(row);
process.stdout.write(row);
console.log();



}

