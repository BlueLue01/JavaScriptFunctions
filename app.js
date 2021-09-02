const writer = (message, number, mpg)=>{
    let ele = document.createElement("div");
    let sum =(message/mpg)*number;
    ele.innerHTML="To drive a car with an MPG rating of "+mpg+" for "+message+" miles at $"+number+" per gallon would cost $"+sum;
    document.body.querySelector(".box").appendChild(ele);


}

let message=prompt("What is your average miles per year?");
let number1 = Number(prompt("What is the current cost of a gallon of gasoline?"))


writer(message, number1, 12);
writer(message, number1, 17);
writer(message, number1, 26);
writer(message, number1, 29);
