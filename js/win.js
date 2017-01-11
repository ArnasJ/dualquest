var winState = {

    create: function () {

        var winText = game.add.text(game.width / 2, game.height * 0.3, 'You won!', { font: '50px Segoe UI', fill: '#000000' });
        winText.anchor.setTo(0.5, 0.5);
        var startAgain = game.add.text(game.width / 2, game.height * 0.5, 'Press R to restart', { font: '50px Segoe UI', fill: '#000000' });
        startAgain.anchor.setTo(0.5, 0.5);
        var buttonS = game.input.keyboard.addKey(Phaser.Keyboard.R);

        buttonS.onDown.addOnce(this.restart, this);
    },
    restart: function () {
        music.stop();
        this.game.physics.arcade.isPaused = false;
        game.state.start('menu');
    }
};