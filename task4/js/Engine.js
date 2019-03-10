function Engine() {

    this.zombieObj  = {};

    this.create = function () {
        if (event.target.dataset.type == 'strong') {
            this.zombieObj = new ZombieStrong('ZombieStrong');
        } else if (event.target.dataset.type == 'mad') {
            this.zombieObj = new ZombieMad('ZombieMad')
        }
    };

    this.change = function (damage) {
        damage === 'full' ?  this.zombieObj.hit = 0 : this.zombieObj.hit -= constants.ZOMBIE_HIT_DAMAGE;

        if (this.zombieObj.hit <= 0) {
            this.zombieObj.type = 'zombie-dead';
        }
    };
}
