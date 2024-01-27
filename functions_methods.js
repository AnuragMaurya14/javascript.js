// for counting vowels in the string 
function vowels(string){
    let count =0;
    for (const char of string){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
return count;
}
// for calculating square of no. in array using foreach array
let squares = [23,34,45,56,7];
squares.forEach((val)=>{
    console.log(val**2)
})
//filter out the marks of student greater then 90 in array
let marks = [87,93,64,99,86,100]
let result=marks.filter((val)=>{
    return val>90;
})
console.log(result)
// calculating sum and factorial using reduce method
let n = prompt("Enter a number");
let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array)
let sum = array.reduce((res,cur)=>{
    return res+cur;
})
console.log(sum);
let fact=array.reduce((res,cur)=>{
      return res*cur;
})
console.log(fact)