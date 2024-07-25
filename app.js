/* 
- add button to start the game
- generate two random nums
- give greater num to winner
*/

function rollDice() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Manipulation of dice image 1
    let srcValue1 = './images/dice' + randomNum1 + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', srcValue1);

    // Manipulation of dice image 2
    let srcValue2 = './images/dice' + randomNum2 + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', srcValue2);

    // Game logic
    if (randomNum1 > randomNum2) {
        document.querySelector('h1').innerHTML = 'Player 1 won the game!';
    } else if (randomNum1 < randomNum2) {
        document.querySelector('h1').innerHTML = 'Player 2 won the game!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }

    // if (playerOne === 1) {
    //     document.querySelector('.img1').src = './images/dice1.png';
    // } else if (playerOne === 2) {
    //     document.querySelector('.img1').src = './images/dice2.png';
    // } else if (playerOne === 3) {
    //     document.querySelector('.img1').src = './images/dice3.png';
    // } else if (playerOne === 4) {
    //     document.querySelector('.img1').src = './images/dice4.png';
    // } else if (playerOne === 5) {
    //     document.querySelector('.img1').src = './images/dice5.png';
    // } else if (playerOne === 6) {
    //     document.querySelector('.img1').src = './images/dice6.png';
    // }

    // if (playerTwo === 1) {
    //     document.querySelector('.img2').src = './images/dice1.png';
    // } else if (playerTwo === 2) {
    //     document.querySelector('.img2').src = './images/dice2.png';
    // } else if (playerTwo === 3) {
    //     document.querySelector('.img2').src = './images/dice3.png';
    // } else if (playerTwo === 4) {
    //     document.querySelector('.img2').src = './images/dice4.png';
    // } else if (playerTwo === 5) {
    //     document.querySelector('.img2').src = './images/dice5.png';
    // } else if (playerTwo === 6) {
    //     document.querySelector('.img2').src = './images/dice6.png';
    // }

    console.log(randomNum1);
    console.log(randomNum2);
}

rollDice();

document.querySelector('#btn').addEventListener('click', rollDice);
