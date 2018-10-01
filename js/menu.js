var menuState = {
  create: function() {

    //Add some title text
    title = game.add.text(game.world.centerX, game.world.centerY-100, 'PONG', {font: '50px Arial', fill: '#00ff00'});
    title.anchor.setTo(0.5, 0.5);

    //Add some help text (controls)
    help = game.add.text(80, game.world.centerY+50, '', {font: '25px Arial', fill: '#ffffff'});
    helpText = 'P1 - W & S \n';
    helpText += 'P2 - Up & Down \n';
    helpText += 'SPACE to Launch Ball';
    help.text = helpText;

    instructions = game.add.text(80, game.world.height-80, 'Press the "BEGIN" button to start', {font: '25px Arial', fill: '#ffffff'});

    //Add a button to the menu
    button = game.add.button(game.world.centerX, game.world.centerY-50, 'button');
    button.anchor.setTo(0.5,0.5);
    button.onInputUp.add(this.PlayGame); //When the button is clicked, run the start function
    text = game.add.text(button.x,button.y,'SINGLE PLAYER');  //Some text for the button
    text.anchor.setTo(0.5,0.5);

    button = game.add.button(game.world.centerX, game.world.centerY, 'button');
    button.anchor.setTo(0.5,0.5);
    button.onInputUp.add(this.start); //When the button is clicked, run the start function
    text = game.add.text(button.x,button.y,'MULTI-PLAYER');  //Some text for the button
    text.anchor.setTo(0.5,0.5);

  },

  start: function() {
    //game.global.score = 0;  //Reset the score
    game.state.start('level');
  },

  PlayGame: function() {
      game.state.start('singlePlayer');
  }

};
