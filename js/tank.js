class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.speed = 600;
  }

  fire(angle) {
    this.setVelocity(
      Math.cos(angle) * this.speed,
      Math.sin(angle) * this.speed
    );
  }

  update() {
    // Détruisez la balle lorsqu'elle sort de la zone de jeu
    if (
      this.x < 0 ||
      this.x > this.scene.game.config.width ||
      this.y < 0 ||
      this.y > this.scene.game.config.height
    ) {
      this.destroy();
    }
  }
}

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

  Shoot(scene, texture) {
    const pointer = scene.input.activePointer;
    const angle = Phaser.Math.Angle.Between(
      this.turret.body.x,
      this.turret.body.y,
      pointer.x,
      pointer.y
    );

    let bullet = new Bullet(
      scene,
      this.turret.body.x + 6,
      this.turret.body.y,
      texture
    );

    bullet.rotation = angle + Math.PI / 2;

    bullet.fire(angle);
  }
}
