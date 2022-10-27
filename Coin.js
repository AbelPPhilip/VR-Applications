var Coin = pc.createScript('coin');

// initialize code called once per entity
Coin.prototype.initialize = function() {
    console.log("Start");
    this.entity.collision.on('triggerenter',this.onCollision, this); 
};

// update code called every frame
Coin.prototype.onCollision = function(event) {
    this.entity.destroy();
};

Coin.prototype.update = function(dt){

};
