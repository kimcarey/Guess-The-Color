let buttons = document.getElementsByClassName('colorButton');
let heading = document.getElementById('colorValue');
let answerMessage = document.getElementById('answer');


// random color picker function
function makeColor() {
    return Math.round(Math.random() * 255)
}

// how to apply color changes to button
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', 'background-color:rgb('+ red +', '+ green +', '+ blue +')');
}



function startGame() {
    answerMessage.innerHTML = '';
    let answerButton = Math.round(Math.random() * (buttons.length - 1)); // to know which button the user has selected

// loop to dynamically change all of the buttons at once with randomized colors
    for (let i = 0; i < buttons.length; i++) {
        let red = makeColor();
        let green = makeColor();
        let blue = makeColor();

        setButtonColor(buttons[i], red, green, blue);

        if (i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;
        }
        buttons[i].addEventListener('click', function (event) {
            //if the button clicked matches the correct RGB value, print "CORRECT". If not, print "WRONG ANSWER".
            if (event.target === buttons[answerButton]) {
                answerMessage.innerHTML = "CORRECT!"
            } else {
                answerMessage.innerHTML = "Wrong Answer. Try Again."
            }

        });
    }
        document.getElementById('reset-button').addEventListener('click', startGame);
}

startGame();


