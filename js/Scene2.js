class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, 0, 0, "laser");

    this.directionX = 0;
    this.directionY = 0;
    this.duree = 0;

    this.speed = Phaser.Math.GetSpeed(600, 1);
  }
}

class Scene2 extends Phaser.Scene {
  constructor() {
    super("playgame");
    this.isDown = false;
  }

  create() {
    this.input.enabled = true;

    //Curseur
    // Centrez le curseur dans la scène

    //Définissez le curseur personnalisé
    // this.input.setDefaultCursor(
    //   "url(assets/img/viseur/crosshair138.png), pointer"
    // );

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

    this.tank2 = new Tank(
      this,
      config.width / 2,
      config.height / 2,
      "tank2",
      "tank2_head"
    );

    for (let i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * config.width);
      let y = Math.floor(Math.random() * config.height);
      this.tankE = new Tank(this, x, y, "tankEnemy");
    }

    //Touche de commande
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      upfr: Phaser.Input.Keyboard.KeyCodes.Z,
      downfr: Phaser.Input.Keyboard.KeyCodes.S,
      leftfr: Phaser.Input.Keyboard.KeyCodes.Q,
      rightfr: Phaser.Input.Keyboard.KeyCodes.D,
    });

    let i;

    //Arbre
    for (i = 0; i < 12; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      let tree = this.add.image(x, y, "tree");
      tree.setDepth(1);
    }
    //Arbre rouge
    for (i = 0; i < 12; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      let tree2 = this.add.image(x, y, "tree2");
      tree2.setDepth(1);
    }

    //caisse
    for (i = 0; i < 20; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      let caisse = this.physics.add.image(x, y, "caisse");
    }
    //Rocher grand
    for (i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      this.add.image(x, y, "rock");
    }

    //Rocher moyen
    for (i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      this.add.image(x, y, "rock2");
    }

    //Rocher grand
    for (i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * 1200) + 20;
      let y = Math.floor(Math.random() * 500) + 10;
      this.add.image(x, y, "rock3");
    }

    let greenFlag = this.add.image(1300, 300, "gflag");
    greenFlag.setScale(0.07);

    this.addEvents();
  }

  addEvents() {
    this.input.on("pointerdown", (pointer) => {
      console.log("Tank should shoot ");
      this.tank1.Shoot(
        this,
        this.tank1.turret.body.x,
        this.tank1.turret.body.y
      );
    });
  }

  update() {
    const speed = 100;

    this.tank1.moveTank(0, 0);

    //Touche au clavier azerty,qwerty,touches directionnelles
    if (
      this.cursorKeys.up.isDown ||
      this.inputKeys.up.isDown ||
      this.inputKeys.upfr.isDown
    ) {
      this.tank1.moveTank(0, -speed);
    } else if (
      this.cursorKeys.down.isDown ||
      this.inputKeys.down.isDown ||
      this.inputKeys.downfr.isDown
    ) {
      this.tank1.moveTank(0, speed);
    } else if (
      this.cursorKeys.left.isDown ||
      this.inputKeys.left.isDown ||
      this.inputKeys.leftfr.isDown
    ) {
      this.tank1.moveTank(-speed, 0);
    } else if (
      this.cursorKeys.right.isDown ||
      this.inputKeys.right.isDown ||
      this.inputKeys.rightfr.isDown
    ) {
      this.tank1.moveTank(speed, 0);
    }

    this.tank1.TurnTurret();
  }
}
