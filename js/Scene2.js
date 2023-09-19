class Scene2 extends Phaser.Scene {
  constructor() {
    super("playgame");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    this.tank1 = this.add.image(
      config.width / 2 - 70,
      config.height / 2,
      "tank1"
    );

    this.tank1.setScale(1.5);

    this.tank2 = this.add.image(config.width / 2, config.height / 2, "tank2");
    this.tank3 = this.add.image(
      config.width / 2 + 50,
      config.height / 2,
      "tank3"
    );

    this.tank3.setScale(0.5);

    this.tank5 = this.add.image(
      config.width / 2 - 50,
      config.height / 2,
      "tank5"
    );
    this.tank4 = this.add.image(
      config.width / 2 + 50,
      config.height / 2,
      "tank4"
    );
  }

  moveTank(tank, speed) {
    tank.y += speed;
    if (tank.y > config.height) {
      this.resetTank(tank);
    }
  }

  resetTank(tank) {
    tank.y = 0;
    let randomX = Phaser.Math.Between(0, config.width);
    tank.x = randomX;
  }

  update() {
    this.moveTank(this.tank1, 1);
    this.moveTank(this.tank2, 4);
    this.moveTank(this.tank3, 7);
    this.moveTank(this.tank4, 7);
    this.moveTank(this.tank3, 7);
  }
}
