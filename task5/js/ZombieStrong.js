function ZombieStrong(container, callback) {
    var args = {
        callback,
        container,
        className: 'unit__zombie-strong',
    };

    Zombie.call(this, args);

    var parentHit = this.hit;

    this.hit = function (damage) {
        parentHit(damage / 2);
    };
}
