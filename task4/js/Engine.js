function Engine(callback, objectLocation) {
    var zombieObj = {};
    var hitDamage = constants.ZOMBIE_HIT_DAMAGE;
    var maxHealth = constants.ZOMBIE_MAX_HEALTH;

    this.createStrong = function() {
        zombieObj = new ZombieStrong(function(eventName) {
            // console.log('Engine callback ==', eventName);

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
