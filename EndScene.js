class EndScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'EndScene'
      })
    }
  
  
    preload() {
    }
  
  
    create() {
  
      this.add.text(10, 50, 'End Screen', {
        fill: '#4D39E0',
        fontSize: '45px'
      })
  
      this.input.on('pointerdown', () => {
        this.scene.stop('EndScene');
        this.scene.start('GameScene');
      })
    }
  }