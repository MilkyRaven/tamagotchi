const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 500 },
        debug: false, // Set to true to see physics bodies
      },
    },
    scene: [StartScene, GameScene]
  };

 const game = new Phaser.Game(config);