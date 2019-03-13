function ZombieStrong(callBack, objectLocation) {
    Zombie.call(this, callBack, objectLocation, 'zombie-strong');

    var parentHit = this.hit;

    this.hit = function (damage) {
        parentHit(damage / 2);
    }
}
