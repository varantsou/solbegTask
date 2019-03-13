function Engine(callback, objectLocation) {
    this.callback = callback;
    this.objectLocation = objectLocation;
}

(function () {
    var zombieObj;
    var hitDamage = constants.ZOMBIE_HIT_DAMAGE;

    Engine.prototype.createStrong = function () {
        zombieObj = new ZombieStrong(function(eventName) {
            console.log('Engine callback ==', eventName);

            if (eventName === 'deleted') {
                zombieObj = null;
            }

            this.callback(eventName);
        }, this.objectLocation);

        // console.log(this);
        zombieObj.createUnit();
    };

    Engine.prototype.createMad = function () {
        zombieObj = new ZombieMad(function(eventName) {
            console.log('Engine callback ==', eventName);

            if (eventName === 'deleted') {
                zombieObj = null;
            }

            this.callback(eventName);
        }, this.objectLocation);

        zombieObj.createUnit();
    };

    Engine.prototype.damage = function () {
        zombieObj.hit(hitDamage);
    };

    Engine.prototype.kill = function () {
        zombieObj.kill();
    };
}());
