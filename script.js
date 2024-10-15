// selecting elements


var inputBox= document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
noofguess=3

// generate random numbersm 1 to 100

var randomnumber = Math.floor(Math.random()*10)+1

if(randomnumber>5)
{
    randomnumber=randomnumber-5
}


//Event Handler Function
function checkthenumber()
{
    if(inputBox.value == randomnumber)
    {
        alert("You got it right")
        result.textContent = "You are right"
    }

    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You lost, generated random number is:" + randomnumber)
        }

        guesscount.textContent="Available guess:"+ noofguess

        result.textContent = "You are wrong"
    }
}