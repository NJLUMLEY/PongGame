var winState = {

  create: function() {

    winnerSound = game.add.audio('win', 1, true);
    winnerSound.play();

    //Congratulations text
//    if (game.global.P1Score > game.global.P2Score) {
//      winner = 'Player 2';
//    } else if (game.global.P2Score > game.global.P1Score){
//      winner = 'Player 1';
//    }

    winLabel = game.add.text(80, 80, 'Congratulations!', {font: '50px Arial', fill: '#00ff00'});

    //Show the player their final score
   scoreLabelOne = game.add.text(game.world.centerX, game.world.centerY, 'Player 1: ' + game.global.P1Score, {font: '45px Arial', fill: '#00ff00'});
//   scoreLabelOne.anchor.setTo(0.5, 0.5);

   scoreLabelTwo = game.add.text(150, 150, 'Player 2: ' + game.global.P2Score, {font: '45px Arial', fill: '#00ff00'});

    //Add a button to the scene
    button = game.add.button(game.world.centerX, game.world.centerY+100, 'button');
    button.anchor.setTo(0.5,0.5);
    button.onInputUp.add(this.restart); //When the button is clicked, run the 'restart' function
    text = game.add.text(button.x,button.y,'PLAY AGAIN');
    text.anchor.setTo(0.5,0.5);
  },

  restart: function() {
    game.state.start('menu'); //Go to the menu state
    winnerSound.stop();
    game.global.P1Score = 0;
    game.global.P2Score = 0;
  }
};
