/* view layer*/
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





/*control layer*/

function dragOutSide(obj){
  if(obj.x<=0 + obj.width / 2){
    obj.x = 0 + obj.width / 2;
  }else if(obj.x >= 640 - (0 + obj.width / 2)){
    obj.x = 640;
    obj.x = 640 - (0 + obj.width / 2);
  }else if(obj.y <= 0 + obj.height / 2){
    obj.y = 0 + obj.height / 2;
  }else if(obj.y >= 1030 - (0 + obj.height / 2)){
    obj.y = 1030 - (0 + obj.height / 2);
  };
};
