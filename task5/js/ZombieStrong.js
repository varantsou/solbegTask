function ZombieStrong(callback, objectLocation) {
    var args = {
        callback,
        objectLocation,
        className: 'zombie-strong',
    };

    Zombie.call(this, args);

    var parentHit = this.hit;

    this.hit = function (damage) {
        parentHit(damage / 2);
    };
}
