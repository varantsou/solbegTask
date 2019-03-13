function ZombieStrong() {
    // this.type = 'zombie-strong';
    // this.maxHit = constants.ZOMBIE_MAX_HEALTH * 2;
    this.hit = this.maxHit;
}

ZombieStrong.prototype = Object.create(Zombie.prototype);
