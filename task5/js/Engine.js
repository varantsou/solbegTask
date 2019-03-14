function Engine(container, callback) {
    var zombieObj = {};
    var hitDamage = constants.ZOMBIE_HIT_DAMAGE;

    this.createStrong = function() {
        zombieObj = new ZombieStrong(container, function(eventName) {
            if (eventName === 'deleted') {
                zombieObj = null;
            }

            callback(eventName);
        });
    };

    this.createMad = function () {
        zombieObj = new ZombieMad(container, function(eventName) {
            if (eventName === 'deleted') {
                zombieObj = null;
            }

            callback(eventName);
        });
    };

    this.damage = function () {
        zombieObj.hit(hitDamage);
    };

    this.kill = function () {
        zombieObj.kill();
    };
}
