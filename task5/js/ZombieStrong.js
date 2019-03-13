function ZombieStrong(args)//callback, objectLocation) {

    this.args = args;
    // console.log(objectLocation);

    //this.className = 'zombie-strong';
    //this.callback = callback;
    //this.objectLocation = objectLocation;

    var parentHit = this.hit;

    this.hit = function (damage) {
        parentHit(damage / 2);
    };
}

ZombieStrong.prototype = Object.create(Zombie.prototype);
