var menuState = {
    create: function () {

       // music = game.add.audio('mainTheme');
       // music.play('', 0, 0.5, true);

        //background
        game.stage.backgroundColor = '#FF00FF';

        this.backFar = this.game.add.tileSprite(0,
            0,
            game.width,
            game.height,
            'backFar'
        );

        this.backMid = this.game.add.tileSprite(0,
            0,
            game.width,
            game.height,
            'backMid'
        );

        this.backClose = this.game.add.tileSprite(0,
            0,
            game.width,
            game.height,
            'backClose'
        );

        var gameTitle = game.add.sprite(game.width / 2, game.height / 10, 'gametitle');
        gameTitle.anchor.setTo(0.5, 0);
        var startGame = game.add.text(game.width / 2, game.height, 'Press Space to Start', { font: '50px Arial', fill: '#000000' });
        startGame.anchor.setTo(0.5, 1);
        var buttonS = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        buttonS.onDown.addOnce(this.start, this);
    },

    update: function () {
        this.backFar.tilePosition.x -= 0.3;
        this.backMid.tilePosition.x -= 0.5;
        this.backClose.tilePosition.x -= 0.8;
    },

    start: function () {
       // music.stop();
        game.state.start('tuto');
    }
};