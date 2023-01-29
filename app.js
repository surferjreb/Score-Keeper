const p1ScoreDisplay = document.querySelector("#player1Display");
const p2ScoreDisplay = document.querySelector("#player2Display");
const highScore = document.querySelector("#highest");
const btnBar = document.querySelector("#btnBar");
const winBar = document.querySelector("#assist");
const orgText = winBar.textContent;

let limit = parseInt(highScore.value);
let winner = '';

// highScore.addEventListener('select', () => {
//     limit = parseInt(highScore.value);
// });

// p1ScoreDisplay.addEventListener();
btnBar.addEventListener('click', function (evt) {
    let score1 = parseInt(p1ScoreDisplay.textContent);
    let score2 = parseInt(p2ScoreDisplay.textContent);
       
    if(winner !== '' && evt.target.value !== 'clear'){
        alert('Please clear the game board...');
        return;
    }

    switch(evt.target.value){
        case 'p1':    score1 = increaseScore(score1);
                      p1ScoreDisplay.textContent = `${score1}`;
                      break;
        case 'p2':    score2 = increaseScore(score2);
                      p2ScoreDisplay.textContent = `${score2}`;
                      break;
        case 'clear': p1ScoreDisplay.textContent = '0';
                      p2ScoreDisplay.textContent = '0';
                      score1 = 0;
                      score2 = 0;
                      winBar.textContent = orgText;
                      winner = '';
    }

    if(checkScore(score1, score2)) {
        if(score1 === limit){
            winner = 'Player 1';
        } else {
            winner = 'Player 2';
        }

        winBar.textContent = `${winner} Wins!`;
    }
    
});

function increaseScore (score) {
    return ++score ;
}

function checkScore (score1 = 0, score2 = 0) {
    limit = parseInt(highScore.value);

    if(score1 === limit || score2 === limit) {
        return true;
    }

    return false;
}
