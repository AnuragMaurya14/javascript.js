// creating a toggle button to changes screen to light mode to dark mode & dark mode to light mode
let mode = document.querySelector("#mode")
let curr="light";
mode.addEventListener("click",()=>{
    if (curr==="light"){
        curr="dark";
        document.querySelector("body").style.backgroundColor="black"
    }else{
        curr="light";
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(curr)
})





let div =document.querySelector("div")
div.addEventListener("mouseover",()=>{
    console.log("How are you?")
    console.log(div)
})
