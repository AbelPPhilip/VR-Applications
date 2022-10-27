var CoinManager = pc.createScript('coinManager');

CoinManager.attributes.add('coinEntity', {type : 'entity'});

//CoinManager.attributes.add('count', {type: 'number', default :10});

// initialize code called once per entity
CoinManager.prototype.initialize = function() {
    this.coinEntity.enabled = false; 

    for(let i =0; i<10; i++){
        let posX = -((Math.random() * 19) + 0.4);
        let posY = 0.5;
        let posZ = -((Math.random() * 15) + 2.4);

        let coin = this.coinEntity.clone();
            coin.enabled = true; 
            coin.setPosition(posX,posY,posZ);
        this.entity.addChild(coin);
    }

};

// update code called every frame
CoinManager.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// CoinManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/
