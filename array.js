//for give marks of student in form of array find the average marks of class
let mark=[23,94,56,95,43,65,78];
let add=0;
for(let value of mark){
    add += value;
}
let avg=add/mark.length;
console.log(`avg marks of the class = ${avg}`)

//to display the price of item after applying 10% of offer
let items =[200,500,9000,599,899]
console.log(items)
for(let i=0;i<items.length;i++){
let offer = items[i]/10;
items[i]-=offer 
}
console.log("after applying 10% of offer",items)

//to remove,insert new values in array
let companies = ["Bloomerg","Microsoft","uber","Google","ibm","Netflex"]
console.log(companies);
companies.shift();
console.log(companies)
companies.splice(1,1,"ola");
console.log(companies)
companies.push("Amazon");
console.log(companies)