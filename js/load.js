var loadState = {

    preload: function () {

        var loading = game.add.text(game.width / 2, game.height / 2, 'Loading', { font: '50px Courier', fill: '#ffffff' });
        loading.anchor.setTo(0.5, 0.5);

        game.load.audio('mainTheme', ['assets/sounds/mainTheme.ogg', /*'assets/sounds/mainTheme.wav', */'assets/sounds/mainTheme.mp3']);
        game.load.audio('step', 'assets/sounds/step.wav');
        game.load.image('gametitle', 'assets/images/gametitle.png');
        game.load.image('box', 'assets/images/box.png');
        game.load.image('easter', 'assets/images/easter.png');
        game.load.image('door', 'assets/images/door.png');
        game.load.tilemap('map', 'assets/maps/Level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('level1props', 'assets/maps/level1props.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('tutorial', 'assets/maps/tutorial.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('tutorialprops', 'assets/maps/tutorialprops.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset', 'assets/images/spritesheet_ground32.png');
        game.load.image('props', 'assets/images/spritesheet_tiles.png');
        game.load.spritesheet('playersheet', 'assets/images/playersheet.png', 56, 70);
        game.load.image('backFar', 'assets/images/backFar.png');
        game.load.image('backMid', 'assets/images/backMid.png');
        game.load.image('backClose', 'assets/images/backClose.png');
    },
    create: function () {
        game.state.start('menu');
    }
};