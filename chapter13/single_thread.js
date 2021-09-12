console.log("Before");
setTimeout(()=>{

    while(true)
    {
        console.log("First timer");
    }
},1000);
setTimeout(()=>{

    while(true)
    {
        console.log("Second timer");
    }
},1000);
console.log("After");