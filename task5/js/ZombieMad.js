function ZombieMad() {
    this.className = 'zombie-mad';
    this.maxHit = constants.ZOMBIE_MAX_HEALTH / 2;
}

ZombieMad.prototype = Object.create(Zombie.prototype);
