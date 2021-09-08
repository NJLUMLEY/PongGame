//Create a Phaser game with dimensions 800x600
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-world');

//Add the different games states
game.state.add('boot', bootState);  //Boot the game
game.state.add('load', loadState);  //Load all assets
game.state.add('menu', menuState);  //The main menu
game.state.add('level', levelState);  //The game itself
game.state.add('win', winState);    //Game over screen
//game.state.add('singlePlayer', singleState); //Single Player version of the game

//Any game spanning variables/settings could be placed here
game.global = {
P1Score: 0,
P2Score: 0,
WinnerPlayer: 0,
singleScore: 0,
lives: 3
};

//Load the boot state
game.state.start('boot');
