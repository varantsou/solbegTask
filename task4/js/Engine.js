function Engine(callback, objectLocation) {
    var zombieObj = {};
    var self = this;

    this.createStrong = function() {
        zombieObj = new ZombieStrong(function(eventName) {
            // console.log('Engine callback ==', eventName);

            if (eventName === 'deleted') {
                self.remove();
            }

            callback(eventName);
        }, objectLocation);

        zombieObj.createUnit();
    };

    this.createMad = function () {
        zombieObj = new ZombieMad(function(eventName) {
            // console.log('Engine callback ==', eventName);

            if (eventName === 'deleted') {
                self.remove();
            }

            callback(eventName);
        }, objectLocation);

        zombieObj.createUnit();
    };

    this.damage = function () {
        zombieObj.hit -= 10;
        zombieObj.change(zombieObj.hit);
    };

    this.kill = function () {
        zombieObj.hit = 0;
        zombieObj.change(zombieObj.hit);
    };

    this.remove = function () {
        zombieObj = null;
    };
}
