class Bullet extends Phaser.Physics.Arcade.Sprite {}

class Tank extends Phaser.GameObjects.Container {
  constructor(scene, x, y, texture, turret) {
    super(scene, x, y);

    scene.physics.world.enable(this);

    const body = scene.physics.add.sprite(0, 0, texture);
    const head = scene.physics.add.sprite(0, 0, turret);
    head.setOrigin(0.5, 0.1);
    this.add([body, head]);

    scene.add.existing(this);

    this.turret = head; //Permet d'ajouter le texture du tour au tank
  }

  Fire() {}

  moveTank(velocityX, velocityY) {
    this.body.setVelocity(velocityX, velocityY);
    if (velocityX < 0) {
      this.body.angle += 90;
    } else if (velocityX > 0) {
      this.body.angle -= 90;
    }
  }

  TurnTurret() {
    const pointer = this.scene.input.activePointer;
    const angle = Phaser.Math.Angle.Between(
      this.x + this.turret.x,
      this.y + this.turret.y,
      pointer.worldX,
      pointer.worldY
    );
    this.turret.rotation = angle - Phaser.Math.DegToRad(90);
  }
}
