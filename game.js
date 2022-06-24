const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;
var clicks = 0;

var espacos = document.querySelectorAll('#tabuleiro .espaco');
for(i=0; i<espacos.length; i++){
    espacos[i].addEventListener('click', function(){
        if(this.innerHTML == ''){
            if(gameOver) return;
            ++clicks;
            // playTime == player1 ? this.innerHTML = player1 : this.innerHTML = player2;
            if(playTime == player1){
                this.innerHTML = player1;
                this.dataset.played = 'player1';
            }else if(playTime == player2){
                this.innerHTML = player2;
                this.dataset.played = 'player2';
            }
            changePlayer();
            updatePlayerInfo();
            verifyClicks(clicks);
            verifyWinning();
        }
    })
}
function changePlayer(){
    playTime == player1 ? playTime = player2 : playTime = player1;
}
function updatePlayerInfo(){
    var info = document.querySelector('#tabuleiro #info');
    if(playTime == player1){
        info.innerHTML = 'Jogador <strong>X</strong>';
    }else{
        info.innerHTML = 'Jogador <strong>O</strong>';
    }
}
function verifyClicks(numOfClicks){
    if(numOfClicks == 9){
        gameOver = true;
    }
}

function verifyWinning(){
    for(i=0; i<espacos.length; i++){
        if(espacos[0].dataset.played == espacos[1].dataset.played && espacos[1].dataset.played == espacos[2].dataset.played && espacos[2].dataset.played != ""){
            tellWinner(espacos[0].dataset.played);
            return;
        }else if(espacos[3].dataset.played == espacos[4].dataset.played && espacos[4].dataset.played == espacos[5].dataset.played && espacos[5].dataset.played != ""){
            tellWinner(espacos[3].dataset.played);
            return;
        }else if(espacos[6].dataset.played == espacos[7].dataset.played && espacos[7].dataset.played == espacos[8].dataset.played && espacos[8].dataset.played != ""){
            tellWinner(espacos[6].dataset.played);
            return;
        }else if(espacos[0].dataset.played == espacos[3].dataset.played && espacos[3].dataset.played == espacos[6].dataset.played && espacos[6].dataset.played != ""){
            tellWinner(espacos[0].dataset.played);
            return;
        }else if(espacos[1].dataset.played == espacos[4].dataset.played && espacos[4].dataset.played == espacos[7].dataset.played && espacos[7].dataset.played != ""){
            tellWinner(espacos[1].dataset.played);
            return;
        }else if(espacos[2].dataset.played == espacos[5].dataset.played && espacos[5].dataset.played == espacos[8].dataset.played && espacos[8].dataset.played != ""){
            tellWinner(espacos[2].dataset.played);
            return;
        }else if(espacos[0].dataset.played == espacos[4].dataset.played && espacos[4].dataset.played == espacos[8].dataset.played && espacos[8].dataset.played != ""){
            tellWinner(espacos[0].dataset.played);
            return;
        }else if(espacos[2].dataset.played == espacos[4].dataset.played && espacos[4].dataset.played == espacos[6].dataset.played && espacos[6].dataset.played != ""){
            tellWinner(espacos[2].dataset.played);
            return;
        }
        
    }
}
function tellWinner(winner){
    console.log(`${winner} is the Winner!`);
    gameOver = true;
}


/* UNMAPPED SPACES
e0 e1 e2
e3 e4 e5
e6 e7 e8
*/