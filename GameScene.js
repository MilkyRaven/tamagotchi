class GameScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'GameScene'
      });
    }
  
    preload() {
        this.load.image("floor", "assets/sky.jpeg");
        this.load.image("tamagotchi", "assets/cardamomo.png");
      }
      
    create() {
        // Create the sprite and enable physics
        sprite = this.physics.add.sprite(50, 50, "tamagotchi");
      
        sprite.setScale(0.5);
        // Create the floor
        var floor = this.physics.add.staticImage(300, 200, "floor");
      
        // Enable collision between the sprite and the floor
        this.physics.add.collider(sprite, floor, function () {
          sprite.setVelocity(0); // Reset sprite's velocity when colliding with floor
        });
      
        // Make the sprite interactive
        sprite.setInteractive();
      
        // Add a pointerdown event to the sprite
        sprite.on(
          "pointerdown",
          function () {
            sprite.setVelocity(Phaser.Math.RND.between(-200, 200), -300);
            // Display random cute message
            var message = Phaser.Math.RND.pick(cuteMessages);
            var text = this.add.text(sprite.x, sprite.y, message, {
              font: "20px Arial",
              fill: "#ffffff",
            });
            text.setOrigin(0.5, 1);
      
            // Remove text after 2 seconds
            this.time.delayedCall(2000, function () {
              text.destroy();
            });
          },
          this
        );
      }
      
      update() {
        // Reset the sprite if it falls off the bottom of the screen
        if (sprite.y > 500) {
          sprite.y = 0;
        }
        if (sprite.x > 600) {
          sprite.x = 0;
        }
      }
      
  
  }