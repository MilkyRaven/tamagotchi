class StartScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'StartScene'
      });
    }
  
    preload() {
  
    }
  
    create() {
      // Creates the text on the start screen:
      this.add.text(10, 50, 'lil crit', {
        fill: '#4D39E0',
        fontSize: '45px'
      });
      this.add.text(130, 520, ' Start Screen\nClick to start!', {
        fill: '#4D39E0',
        fontSize: '20px'
      });
      
    
  
      this.input.on('pointerup', () => {
        this.scene.stop('StartScene');
        this.scene.start('GameScene');
      });
  
    }
  }