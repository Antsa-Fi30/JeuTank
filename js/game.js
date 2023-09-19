const widthScreen = window.innerWidth;
const heightScreen = window.innerHeight;

const config = {
  width: widthScreen - 20,
  height: heightScreen - 20,
  type: Phaser.AUTO,
  preload: preload,
  create: create,
  update: update,
};

const game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
