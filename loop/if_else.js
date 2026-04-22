
// =======if /else====
  
// ----1------check---even/odd---------
let l = 17;
if(l % 2 === 0){
   console.log("even");
   
}

else(console.log("odd")
)


// ===2====grade cond..===

let marks  = 211;
if (marks >= 90 && marks <101){
    console.log("A");
}

else if (marks >= 80 && marks < 90) {
    console.log("B");
    
} 

else if(marks >= 70 && marks < 80){
    console.log("C");
    
}

else if(marks >=60 && marks < 70){
    console.log("D")
    
}


 else if(marks <60){
    console.log("F");
    
}
else
    console.log("AMISHA");
    


// =====3=====leap year check=====
//  let result = confirm("are u ready?");

let leap = 2028;

if(leap %4 === 0 && leap %100 !== 0){
    console.log("Leap year");
    
}

else{
    console.log("not leap year");
    
}






// ===5=====check vowel======

let charac = "d";
if ("aeiouAEIOU".includes(charac)) {
    console.log("vowel");
    
}

else{
    console.log('consonant');
    
}


// =====6====positive/negative==

let number = 89;

if( number >0){
    console.log("Positive");
    
}

else if (number < 0){
    console.log("Negative");
    
}

else{
    console.log("Zero");

}

    // ===7= calculate Programe addition/substraction /multi/division


//     let input = require("prompt-sync")();

//     let num1 = Number(input("enter 1 number "));
//     let num2 = Number(input("enter 2 number "));
//     let operation = input("enter operation(+ , -, * , / ) ");

//     let result ;
//     if (operation === "+"){
//        result =  num1 + num2;

//     }
//     else if(operation === "-"){
//         result = num1 - num2;
//     }

//     else if(operation === "*"){
//         result = num1 * num2;
//     }
// else if(operation === "/"){
       
//     if (num2 === 0) {
//         console.log("cant divisible by zero");
        
//     }
//     else{
//         result = num1 / num2;

//     }
//     }
// else{
//     console.log("error");
    
// }
// process.stdout.write(String(result));
// console.log(result);



// =======8=====day check
let date = 3;

switch (date) {
    case 1:console.log("saturday");
    
        
        break;
 case 2:console.log("sunday");
    
        
        break;
 case 3:console.log("monday");
    
        
        break;
 case 4:console.log("tuesday");
    
        
        break;
 case 5:console.log("wednesday");
    
        
        break;
 case 6:console.log("thursday");
    
        
        break;
 case 7:console.log("friday");
    
        
        break;
 

    default:console.log("wrong day");
    
        break;
}


// -----9---check triangle=====\


let input = require("prompt-sync")();
let side1 = Number(input(" enter side 1 "));
let side2 = Number(input("enter side 2 "));
let side3 = Number(input("enter side 3 "));


/// check triangle
if
(side1 + side2 > side3 && side2 + side3 > side1  && side3 + side1 > side2){




    if( side1 == side2 && side2 == side3){
        // console.log("triangle is equilateral ");
process.stdout.write("triangle is equilateral\n ")

         
    }
     else if( side1 == side2 || side2 == side3 || side1 == side3){
        // console.log("triangle is Isoceles ");
process.stdout.write("triangle is Isoceles\n")
         
    } 
    else{
        // console.log("triangle is scalene ");
process.stdout.write("triangle is scalene\n ")
         
    }
}
// process.stdout.write()