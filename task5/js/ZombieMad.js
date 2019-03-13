function ZombieMad() {
    // this.type = 'zombie-mad';
    this.maxHit = constants.ZOMBIE_MAX_HEALTH / 2;
    this.hit = this.maxHit;
}

ZombieMad.prototype = Object.create(Zombie.prototype);
