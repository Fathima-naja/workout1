//1) program to swap two numbers---
// let a=20
// b=10
// let temp=0
// console.log("value of a before swapping:"+a)
// console.log("value of b before swapping:"+b)
// temp=a
// a=b
// b=temp
// console.log("value of a after swapping:"+a)
// console.log("value of b after swapping:"+b)


//2)programe to check whether the character is vowel or consonnent or number using switch
// let n=prompt("enter a character")

// switch(n){
//     case "a":
//     console.log("its vowel")
//     break;
//     case "e":
//     console.log("its vowel")
//     break;
//     case "i":
//     console.log("its vowel")
//     break;
//     case "o":
//     console.log("its vowel")
//     break;
//     case "u":
//     console.log("its vowel")
//     break;
//     default:
//         console.log("its consonnent")
// }


//3) programe to print the sum of digits
// let numb=12345
// sum=0
// while(numb>0){
//     a=numb%10
//     sum=sum+a
//     numb=parseInt(numb/10)
    
// }


// console.log(sum)

//4) print number of digits in a given number--
// let number=12345
// sum=0
// while(number>0)
// {
//     a=number%10
//     sum=sum+1
//     number=parseInt(number/10)
// }

// console.log(sum)

//5)program to find whether number is odd or even---
// let num= parseInt(prompt("enter a number"))
// if(num%2==0){
//     console.log(num+" number is even" )
// }
// else{
//     console.log(num+" number is odd")
// }

//6)program to reverse a number---
// let num=12345
// b=0
// while(num>0){
//     a=num%10
//     b=b*10+a
//     num=parseInt(num/10)
    
// }
// console.log(b)


//7)program to find given number is available in array
// let num=parseInt(prompt("enter a number"))
// c=0
// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         c++
//     }
// }
// if(c>0){
//     console.log("number is available")
// }
// else{
//     console.log("number is not available")
// }

//8)program to find how many positive numbers arae available in a an array of 10 elements---
// let arr=[1,4,6,7,8,6,-4,3,6,9]
// pos=0
// neg=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         pos=pos+1
//     }
//     else{
//         neg=neg+1
//     }
// }
// console.log("positive numbers:" +pos)
// console.log("negative numbers :" +neg)

// 9)program for functions with +,-,*,/ with parameters

// function sum(a,b){
//     s=a+b
//     console.log("addition:" +s)
// }
// function sub(a,b){
//     b=a-b
//     console.log("substraction:" +b)
// }
// function  mul(a,b){
//     c=a*b
//     console.log("multiplication:" +c)
// }
// function div(a,b){
//     d=a/b
//     console.log("division:" +d)
// }
// sum(1,2)
// sub(5,4)
// mul(2,3)
// div(6,2)

//10) print diamond star

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    string += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);





