const WidthScreen = window.innerWidth;
const HeightScreen = window.innerHeight;

const config = {
  type: Phaser.AUTO,
  width: WidthScreen - 20,
  height: HeightScreen - 20,
  backgroundColor: 0x00000,
  scene: [Scene1, Scene2],
  physics: {
    default: "arcade",
    arcade: {
      debug: false, // Activez cela pour afficher les collisions en mode débogage
    },
  },
};

const game = new Phaser.Game(config);
