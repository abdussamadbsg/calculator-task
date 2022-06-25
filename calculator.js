var opr = prompt("Enter operator: +, -, /, *")
var num1 = parseInt(prompt("Enter first number: "))
var num2 = parseInt(prompt("Enter second number: "))

if(opr == "+")
{
    result = num1 + num2;
} else if(opr == "-")
{
    result = num1 - num2;
} else if(opr == "*")
{
    result = num1 * num2;
} else if(opr == "/")
{
    result = num1 / num2;
}
alert(num1 + opr + num2 +'='+ result);

