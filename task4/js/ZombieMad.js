function ZombieMad() {
    Zombie.call(this, 'zombie-mad');

    this.maxHit = constants.ZOMBIE_MAX_HEALTH / 2;
    this.hit    = this.maxHit;
}

