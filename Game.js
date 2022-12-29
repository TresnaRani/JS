


var  numberOfWon=0;
var numberOfLost=0;

for(i=1;i<=5;i++){

var gussing_Number =  parseInt(prompt("Enter a number from 1 to 5"));

var random_Number =  Math.floor(Math.random()*5)+1;

if(gussing_Number==random_Number){
    console.log("You have won")

    numberOfWon++;
}
else{

    console.log("You are lost.Random number was "+random_Number);
    numberOfLost++;
}
}

document.write("Total win = "+numberOfWon +"</br>");
document.write("Total lost = "+numberOfLost);