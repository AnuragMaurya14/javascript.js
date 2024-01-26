//for give marks of student in form of array find the average marks of class
let marks=[23,94,56,95,43,65,78];
let sum=0;
for(let value of marks){
    sum += value;
}
let avg=sum/marks.length;
console.log(`avg marks of the class = ${avg}`)

//to display the price of item after applying 10% of offer
let items =[200,500,9000,599,899]
console.log(items)
for(let i=0;i<items.length;i++){
let offer = items[i]/10;
items[i]-=offer 
}
console.log("after applying 10% of offer",items)
