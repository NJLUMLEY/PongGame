var loadState = {
  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    //Load all the assets
    //(the size and number of assets will slow this process down)
    game.load.image('background', 'assets/background.png');
    game.load.image('button', 'assets/button.png');
    game.load.image('ball', 'assets/ball.png');
    game.load.image('playerOne', 'assets/paddleOne.png');
    game.load.image('playerTwo', 'assets/paddleTwo.png');
//    game.load.audio('hit', 'assets/Bounce.wav');
//    game.load.audio('play', 'assets/PLay.wav');
  //  game.load.audio('win', 'assets/Win.wav');

  },

  create: function() {
    game.state.start('menu'); //Load the menu
  }

};
