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
  }

  addEvent() {
    this.input.on("pointerdown", (pointer) => {
      if (pointer.rightButtonDown) {
        this.tank1.Fire();
      }
    });
  }

  update() {
    //Deplacement du pointeur souris et la direction de la tête

    //Touche au clavier
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    const speed = 12;

    if (this.cursorKeys.up.isDown) {
      console.log("forwards");
    } else if (this.cursorKeys.down.isDown) {
      console.log("backwards");
    } else if (this.cursorKeys.left.isDown) {
      console.log("left");
    } else if (this.cursorKeys.right.isDown) {
      console.log("right");
    }

    this.tank1.TurnTurret();
    this.addEvent();
  }
}
