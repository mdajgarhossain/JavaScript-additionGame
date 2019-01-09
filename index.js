let number1;
let number2;

number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number1;

let result = number1 + number2;

let checkResult = document.querySelector('input[type=text]');
let value = checkResult.value;
let btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function () {
    value = checkResult.value;
    if(value == result) {
        alert('You are correct');
    }
    else {
        alert('You are incorrect, the answer was ' + result);
    }


    document.querySelector('input[type=text]').value = "";
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("number1").innerHTML = number1;
    document.getElementById("number2").innerHTML = number1;

    result = number1 + number2
};
