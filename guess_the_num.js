let randomNum = (Math.random()*100) + 1;
userinpt = prompt('Guess a number between 1 to 100');
let diff = Math.abs(randomNum - userinpt);
let restart = true;
while(isNaN(userinpt) || userinpt < 1 || userinpt > 100){
    userinpt = prompt('Please enter a valid number between 1 to 100');
    diff = Math.abs(randomNum - userinpt);
}
while(restart){
    if(randomNum == userinpt){
    console.log('You guessed the right number');
    restart = false;
    }
    else{
        if(userinpt > randomNum){
            if(diff > 50){
                console.log('You guessed too High');
            }
            else if(diff > 30){
                console.log('You guessed High');
            }
            else if(diff > 10){
                console.log('You guessed slightly High');
            }
            else{
                console.log('You guessed very close but still High');
            }
        }
        else{
            if(diff > 50){
                console.log('You guessed too low');
            }
            else if(diff > 30){
                console.log('You guessed low');
            }
            else if(diff > 10){
                console.log('You guessed slightly low');
            }
            else{
                console.log('You guessed very close but still low');
            }
        }
        restart = true;
    }
}