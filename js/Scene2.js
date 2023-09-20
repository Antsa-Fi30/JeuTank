class Scene2 extends Phaser.Scene {
  constructor() {
    super("playgame");
  }

  create() {
    this.input.enabled = true;

    //Curseur
    let cursor = this.input.setDefaultCursor(
      "url(assets/img/viseur/particle_2.png), pointer"
    );

    //Permet de scroller le fond
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    // Créez un tank en utilisant la classe Tank
    this.tank1 = new Tank(
      this,
      config.width / 2 - 70,
      config.height / 2,
      "tank1",
      "tank1_head"
    );
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 40;
    this.tank1.moveTank(0, 0);
    //Touche au clavier
    if (this.cursorKeys.up.isDown) {
      this.tank1.moveTank(0, -speed);
    } else if (this.cursorKeys.down.isDown) {
      this.tank1.moveTank(0, speed);
    } else if (this.cursorKeys.left.isDown) {
      this.tank1.moveTank(-speed, 0);
    } else if (this.cursorKeys.right.isDown) {
      this.tank1.moveTank(speed, 0);
    }

    this.tank1.TurnTurret();
  }
}
