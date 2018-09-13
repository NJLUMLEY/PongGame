var levelState = {
  create: function() {

  game.add.sprite(0,0,'background');

    //Some basic controls for the game
    this.controls = game.input.keyboard.addKeys(
      {
        'P1Up': Phaser.KeyCode.W,
        'P1Down': Phaser.KeyCode.S,
        'P2Up': Phaser.KeyCode.UP,
        'P2Down': Phaser.KeyCode.DOWN,
        'Launch' : Phaser.KeyCode.SPACEBAR
      }
    );

    ball = game.add.sprite(400,300, 'ball');
    ball.enableBody = true;
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.y = 1.01;
    ball.body.bounce.x = 1.01;

    playerOne = game.add.sprite(10,250, 'playerOne');
    playerOne.enableBody = true;
    game.physics.arcade.enable(playerOne);
    playerOne.body.collideWorldBounds = true;
    playerOne.body.immovable = true;

    playerTwo = game.add.sprite(770, 250, 'playerTwo');
    playerTwo.enableBody = true;
    game.physics.arcade.enable(playerTwo);
    playerTwo.body.collideWorldBounds = true;
    playerTwo.body.immovable = true;

    //Add any display elements (score, lives etc)
    PlayerOneScore = game.add.text(150, 10, 'Player 1: ' + game.global.P1Score, {font: 'Arial', fontSize: '30px', fill: 'yellow'});
    PlayerTwoScore = game.add.text(500, 10, 'Player 2: ' + game.global.P2Score, {font: 'Arial', fontSize: '30px', fill: 'yellow'});
  },

  update: function() {  //This function runs every frame
    //Collision detection
    game.physics.arcade.collide(ball, playerOne);
    game.physics.arcade.collide(ball, playerTwo);
    //Movement code

if (this.controls.Launch.isDown) {
  ball.body.velocity.x = 400;
  ball.body.velocity.y = 400;
}

if (this.controls.P1Up.isDown) {
  playerOne.body.velocity.y = -400;
} else if (this.controls.P1Down.isDown){
  playerOne.body.velocity.y = 400;
} else{
  playerOne.body.velocity.y = 0;
}

if (this.controls.P2Up.isDown) {
  playerTwo.body.velocity.y = -400;
} else if (this.controls.P2Down.isDown) {
  playerTwo.body.velocity.y = 400;
} else {
  playerTwo.body.velocity.y = 0;
}

if (ball.x = 800) {
  this.GainPointP1();
}

  },

  GainPointP1: function() {
    game.global.P1Score++;  //Increase the score
    ball.x = 400;
    ball.y = 300;

    if(game.global.P1Score >= 10) { //Does the player have enough points to win?
      this.Win();
    }
  },

  GainPointP2: function() {
    game.global.P2Score++;
    ball.x = 400;
    ball.y = 300;

    if (game.global.P2Score >= 10) {
    this.Win();
    }
  },

  Win: function() {
    game.state.start('win');  //Go to the win state
  }

};
