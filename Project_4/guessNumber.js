 let randomNumber =  parseInt(Math.random()*100+1);

 const submit = document.querySelector('#subt');
 const userIp = document.querySelector('#guessField');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHigh = document.querySelector('.lowOrHi');

 const startOver = document.querySelector('.resultParas');

 const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame =true;

//first check if user is available 
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()

        const guess  = parseInt(userIp.value)

        validateGuess(guess)

    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('please Enter number more than 1')
    } else if(guess>100){
        alert('please Enter number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess<11){

            displayGuess(guess)
            checkGuess(guess)
        } else{
            displayMessage(`Game Over !!! Randon number was ${randomNumber }`)
            endGame();
        }

    }
}

function checkGuess(guess){

    if(guess===randomNumber){
        displayMessage(`Winner Winner !! Chicken Dinner !!!`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too Low`)
    }
    else{
        displayMessage(`Number is too High `)
    }
}

function displayGuess(guess){
userIp.value=''
guessSlot.innerHTML+=`${guess} `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML =`<h2>${message}</h2>`
}



function endGame(){

    userIp.value=''
    userIp.setAttribute('disabled','')
    // adding button and new game in p element
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame">new Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame();
}


//starting once again after completion

function newGame(){

    const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userIp.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    });
}
