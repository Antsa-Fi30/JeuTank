class Tank extends Phaser.GameObjects.Container {
  constructor(scene, x, y, texture, turret) {
    super(scene, x, y);

    this.life = 10;
    this.bonus = [];
    this.flag = false;

    scene.physics.world.enable(this);

    const body = scene.physics.add.sprite(0, 0, texture);
    const head = scene.physics.add.sprite(0, 0, turret);
    head.setOrigin(0.5, 0.1);
    head.setScale(0.9);
    this.add([body, head]);

    scene.add.existing(this);

    this.turret = head; //Stocke la l'element head tu tank dans turret pour que ça bouge
  }

  moveTank(velocityX, velocityY) {
    this.body.setVelocity(velocityX, velocityY);
    if (velocityX < 0) {
      this.body.rotation = 90;
    } else if (velocityX > 0) {
      this.body.rotation = -90;
    }
    if (velocityY < 0) {
      this.body.rotation = 180;
    } else if (velocityY > 0) {
      this.body.rotation = 0;
    }
  }

  TakeFlag(tank) {
    console.log("le tank " + tank + "a pris le drapeau");
  }

  TurnTurret() {
    // Calcul de l'angle entre le curseur et la tourelle
    const pointer = this.scene.input.activePointer;
    if (this.body.rotation === 90) {
      this.turret.setRotation(
        Phaser.Math.Angle.Between(pointer.x, pointer.y, this.x, this.y) + 0
      );
    } else if (this.body.rotation === -90) {
      this.turret.setRotation(
        Phaser.Math.Angle.Between(pointer.x, pointer.y, this.x, this.y) +
          Math.PI
      );
    } else if (this.body.rotation === 0) {
      this.turret.setRotation(
        Phaser.Math.Angle.Between(pointer.x, pointer.y, this.x, this.y) +
          Math.PI / 2
      );
    } else if (this.body.rotation === 180) {
      this.turret.setRotation(
        Phaser.Math.Angle.Between(pointer.x, pointer.y, this.x, this.y) -
          Math.PI / 2
      );
    }
  }
}
