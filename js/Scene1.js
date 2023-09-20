class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/img/Bg.jpg");
    this.load.image("tank1", "assets/img/png/tankBody_red.png");
    this.load.image("tank1_head", "assets/img/png/tankRed_barrel1_outline.png");
    this.load.image("tank2", "assets/img/png/tankBody_blue.png");
    this.load.image("tank2_head", "assets/img/png/tankBlue_barrel1.png");
    this.load.image("Viseur", "assets/img/viseur/particle_2.png");
    this.load.image("shootFlame", "assets/img/png/shotLarge.png");
    this.load.image("bullet", "assets/img/png/bulletRed1_outline.png");

    this.load.spritesheet("explosion", "assets/img/png/explosion.png", {
      frameWidth: 40,
      frameHeight: 40,
    });
  }

  create() {
    this.add.text(20, 20, "Click to start...");
    this.scene.start("playgame");
  }
}
