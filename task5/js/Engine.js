function Engine() {

}

(function () {
    var zombieObj;

    Engine.prototype.createStrong = function () {
        zombieObj = new ZombieStrong();
        zombieObj.createUnit();
    };

    Engine.prototype.createMad = function () {
        zombieObj = new ZombieMad();
        zombieObj.createUnit();
    };

    Engine.prototype.damage = function () {
        zombieObj.hit -= 10;
        console.log(zombieObj.hit);
        zombieObj.change(zombieObj.hit);
        zombieObj.render();
    };

    Engine.prototype.kill = function () {
        zombieObj.hit = 0;
        zombieObj.change(zombieObj.hit);
        zombieObj.render();
    };
}());
