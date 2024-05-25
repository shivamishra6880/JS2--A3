// Answer:-1

// let M = Number(prompt("enter your result"))
// if(M <= 10){
//     console.log("E")
// }
// else if(11 <= M && M <= 20){
//     console.log("D")
// }
// else if(21 <= M && M <= 30){
//     console.log("C")
// }
// else if(31 <= M && M <= 40){
//     console.log("B")
// }
// else if(41 <= M && M <= 50){
//     console.log("A")
// }
// else{
//     console.log("not define")
// }


// Answer:---2

// let C =(prompt("Enter P,p,Z,z,E,e,D,d"))
 
// if (C == "P" || C == 'p'){
//     console.log("PrepBytes")
// }
// else if (C == 'Z' || C == 'z'){
//     console.log("Zenith")
// }
// else if (C == 'E' || C == 'e'){
//     console.log("Expert Coder")
// }
// else if (C == 'D' || C == 'd'){
//     console.log("Data Structure")
// }
// else{
//      console.log("not define")
// }

// Answer:---3

// let A = Number(prompt("enter number"))
// let B = Number(prompt("enter  number"))
// let C = Number(prompt("enter  number"))

// let a =A
// let b =B
// let c =C

// if (B <= A && C <= A){
//     console.log(""+a)
// }
// else if (A <= B && C <= B){
//     console.log(""+b)
// }
// else {
//     console.log(""+c)
// }

// Answer:---4

// let A = Number(prompt("enter number"))
// let B = Number(prompt("enter  number"))
// let C = Number(prompt("enter  number"))

// let a =A
// let b =B
// let c =C

// if ((B >= A && C <= A) || (B <= A && C >= A) ){
//     console.log(""+a)
// }
// else if ((A >= B && C <= B) || (A <= B && C >= B)){
//     console.log(""+b)
// }
// else {
//     console.log(""+c)
// } 

// Answer--5-

let A = Number(prompt("enter 1st angle of triangle"))
let B = Number(prompt("enter 2nd angle of triangle"))
let C = Number(prompt("enter 3rd angle of triangle"))

if((A + B + C == 180) && (A > 90 || B > 90 || C > 90)){
    console.log("obtuse tringle")
}
else if ((A + B + C == 180) && (A <= 90 || B <=  90 || C <=  90)) {
    console.log("acute")
}
else{
    console.log(" not a tringle")
}


