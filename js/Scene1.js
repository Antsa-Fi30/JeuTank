class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/img/Bg.jpg");
    this.load.image("tank1", "../assets/img/png/tank_red.png");
    this.load.image("tank2", "../assets/img/png/tank_blue.png");
    this.load.image("tank3", "../assets/img/png/tank_green.png");
    this.load.image("tank4", "../assets/img/png/tank_dark.png");
    this.load.image("tank5", "../assets/img/png/tank_sand.png");
  }

  create() {
    this.add.text(20, 20, "Click to start...");
    this.scene.start("playgame");
  }
}
