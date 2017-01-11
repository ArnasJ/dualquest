var tutorial = {

    create: function () {

        music = game.add.audio('mainTheme');
        music.play('', 0, 0.5, true, true);

        //background
        game.stage.backgroundColor = '#FF00FF';

        this.backFar = this.game.add.tileSprite(0,
            0,
            120 * 32,
            this.game.height + 40,
            'backFar'
        );

        this.backMid = this.game.add.tileSprite(0,
            0,
            120 * 32,
            this.game.height + 40,
            'backMid'
        );

        this.backClose = this.game.add.tileSprite(0,
            0,
            120 * 32,
            this.game.height + 40,
            'backClose'
        );

        tutorial = game.add.tilemap('tutorial');
        tutorial.addTilesetImage('tileset');
        tutorial.setCollisionBetween(1, 2048);
        layer = tutorial.createLayer('Tile Layer 1');
        layer.resizeWorld();

        //props map
        props = game.add.tilemap('tutorialprops');
        props.addTilesetImage('props');
        layer2 = props.createLayer(0);
        layer2.resizeWorld();

        //Finish Area
        g = game.add.sprite(118 * 32, 11 * 32, 'door');
        theEnd = game.add.text(1 * 32, 3 * 32, 'Level 1', { font: '36px Stencil', fill: '#FFFFFF' });
        g.anchor.setTo(0.5, 0);
        game.physics.enable(g);
        g.body.gravity.y = 0;
        g.body.collideWorldBounds = true;
        g.body.immovable = true;

        createPlayers();

        //keyboard input
        cursor1 = game.input.keyboard.createCursorKeys();
        upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
        leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

        //CREATE BOX GROUP

        boxes = game.add.group();
        boxes.enableBody = true;
        game.physics.enable(boxes);

        // createBoxes

        var box1 = boxes.create(72 * 32, 13 * 32, 'box');
        game.physics.enable(box1);
        box1.body.gravity.y = 1000;
        box1.body.collideWorldBounds = true;

    },

    update: function () {

        this.backFar.tilePosition.x = game.camera.x * 0.8;
        this.backMid.tilePosition.x = game.camera.x * 0.6;
        this.backClose.tilePosition.x = game.camera.x * 0.4;

        //collisions
        game.physics.arcade.collide(player, player2);
        game.physics.arcade.collide(player, layer);
        game.physics.arcade.collide(player2, layer);
        game.physics.arcade.collide(player2, boxes);
        game.physics.arcade.collide(player, boxes);
        game.physics.arcade.collide(boxes, layer);
        game.physics.arcade.collide(boxes, boxes);

        //update functions
        boxes.forEach(function (b) {
            b.body.velocity.x = 0;
        })

        if (game.physics.arcade.overlap(player, g, null, null, this) && game.physics.arcade.overlap(player2, g, null, null, this)) {
            game.add.text(105 * 32, 7 * 32, 'LEVEL 1 COMPLETE ', { font: '36px Stencil', fill: '#000000' })
            this.Win();
        }

        //player1 controls
        if (cursor1.left.isDown) {
            player.animations.play('run');
            player.scale.setTo(-1, 1);
            player.body.velocity.x = -200;
        } else if (cursor1.right.isDown) {
            player.animations.play('run');
            player.scale.setTo(1, 1);
            player.body.velocity.x = 200;
        } else {

            player.body.velocity.x = 0;
        }
        //jump player1
        if (cursor1.up.isDown && (player.body.onFloor() || player.body.touching.down)) {
            player.animations.play('jump');
            var stepSound = game.add.audio('step');
            stepSound.play();
            player.body.velocity.y = -400;

        }
        //player1 idle
        if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
            player.animations.play('idLe');
        }
        //player2 controls 
        if (leftButton.isDown) {
            player2.animations.play('run');
            player2.scale.setTo(-1, 1);
            player2.body.velocity.x = -200;
        } else if (rightButton.isDown) {
            player2.animations.play('run');
            player2.scale.setTo(1, 1);
            player2.body.velocity.x = 200;
        } else {
            player2.body.velocity.x = 0;
        }

        //jump player2
        if (upButton.isDown && (player2.body.onFloor() || player2.body.touching.down)) {
            player2.animations.play('jump');
            var stepSound = game.add.audio('step');
            stepSound.play();
            player2.body.velocity.y = -400;
        }

        //player2 idle
        if (player2.body.velocity.x == 0 && player2.body.velocity.y == 0) {
            player2.animations.play('idLe');
        }

    },

    Win: function () {
        player.animations.paused = true;
        player2.animations.paused = true;
        //this.game.physics.arcade.isPaused = true;
        music.stop();
        game.state.start('play');
    }
};