var Movement = pc.createScript('movement');

Movement.attributes.add("speed", { type : 'number'});

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

Movement.prototype.setMotion = function(dt){
    if(this.app.keyboard.isPressed(pc.KEY_W)){
        this.entity.rigidbody.applyForce(0,0,-5.0);
    }
    if(this.app.keyboard.isPressed(pc.KEY_S)){
        this.entity.rigidbody.applyForce(0,0,5.0);
    }
    if(this.app.keyboard.isPressed(pc.KEY_A)){
        this.entity.rigidbody.applyForce(-5.0,0,0);
    }
    if(this.app.keyboard.isPressed(pc.KEY_D)){
        this.entity.rigidbody.applyForce(5.0,0,0);
    }

};

// update code called every frame
Movement.prototype.update = function(dt) {
    this.setMotion();
};

// swap method called for script hot-reloading
// inherit your script state here
// Movement.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/
