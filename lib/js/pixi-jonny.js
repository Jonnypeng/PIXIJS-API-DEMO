class button extends PIXI.Sprite{
  constructor(imgID,x,y){
    super();
    this.texture = new PIXI.Texture.fromImage(imgID);
    this.x = x;
    this.y = y;
    this.pivot.x = this.texture.width / 2;
    this.pivot.y = this.texture.height / 2;
    this.interactive = true;
    this.buttonMode = true;
  }
};
