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
    this.load.image("tankEnemy", "assets/img/png/tank_huge.png");
    this.load.image("Viseur", "assets/img/viseur/particle_2.png");
    this.load.image("shootFlame", "assets/img/png/shotLarge.png");
    this.load.image("bullet", "assets/img/png/bulletRed1_outline.png");
    this.load.image("laser", "assets/img/laser/laser.png");
    this.load.image("tree", "assets/img/png/treeGreen_large.png");
    this.load.image("tree2", "assets/img/png/treeBrown_large.png");
    this.load.image("caisse", "assets/img/png/crateWood.png");
    this.load.image("gflag", "assets/img/png/greenFlag.png");
    this.load.image("rock", "assets/img/png/rock.png");
    this.load.image("rock2", "assets/img/png/rock2.png");
    this.load.image("rock3", "assets/img/png/rock3.png");
  }

  create() {
    this.add.text(20, 20, "Click to start...");
    this.scene.start("playgame");
  }
}
