var f = ["ved" , "yash" , "samay" , "akash" , "drone"];

f.forEach(function(ele , index , arr){
    console.log(`Index is : ${index} & ele is : ${ele}`);
    // not able to use break
});

// help of flat arrow function
f.forEach((ele , index) => {
    console.log(`Index is : ${index} & ele is : ${ele}`);
});