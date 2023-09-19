const WidthScreen = window.innerWidth;
const HeightScreen = window.innerHeight;

const config = {
  type: Phaser.AUTO,
  width: WidthScreen - 20,
  height: HeightScreen - 20,
  scene: [Scene1, Scene2],
};

const game = new Phaser.Game(config);
