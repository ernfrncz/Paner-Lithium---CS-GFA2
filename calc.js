function add(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("out").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}
function sub(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var dif = num1 - num2;
    document.getElementById("out").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + dif + ".";
}
function mult(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var pro = num1 * num2;
    document.getElementById("out").innerHTML = "The product of " + num1 + " and " + num2 + " is " + pro + ".";
}
function div(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var quo = num1 / num2;
    document.getElementById("out").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quo + ".";
}
function rem(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var rem = num1 % num2;
    document.getElementById("out").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + rem + ".";
}