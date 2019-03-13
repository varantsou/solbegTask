function Engine(callback, objectLocation) {
    var zombieObj = {};
    var hitDamage = constants.ZOMBIE_HIT_DAMAGE;

    this.createStrong = function() {
        zombieObj = new ZombieStrong(function(eventName) {
            if (eventName === 'deleted') {
                zombieObj = null;
            }

            callback(eventName);
        }, objectLocation);
    };

    this.createMad = function () {
        zombieObj = new ZombieMad(function(eventName) {
            if (eventName === 'deleted') {
                zombieObj = null;
            }

            callback(eventName);
        }, objectLocation);
    };

    this.damage = function () {
        zombieObj.hit(hitDamage);
    };

    this.kill = function () {
        zombieObj.kill();
    };
}
