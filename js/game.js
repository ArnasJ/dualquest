var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('tuto', tutorial);
game.state.add('play', playState);
game.state.add('win', winState);

var cursor1;
var background;
var map;
var layer;
var props;

game.state.start('boot');

function createPlayers() {


    // 1 PLAYER
    player = game.add.sprite(2 * 32, 15 * 32, 'playersheet');
    player.anchor.setTo(0.5, 0);
    player.animations.add('idLe', [4], 1, true);
    player.animations.add('jump', [5], 1, true);
    player.animations.add('run', [6, 7], 7, true);
    player.frame = 4;
    game.physics.enable(player);
    player.body.gravity.y = 1000;
    player.body.collideWorldBounds = true;
    game.camera.follow(player);


    //2 PLAYER
    player2 = game.add.sprite(5 * 32, 15 * 32, 'playersheet');
    player2.anchor.setTo(0.5, 0);
    player2.animations.add('idLe', [0], 1, true);
    player2.animations.add('jump', [1], 1, true);
    player2.animations.add('run', [2, 3], 7, true);
    game.physics.enable(player2);
    player2.body.gravity.y = 1000;
    player2.body.collideWorldBounds = true;

}
