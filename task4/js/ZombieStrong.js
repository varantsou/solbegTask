function ZombieStrong() {
    Zombie.call(this, 'zombie-strong');

    this.maxHit = constants.ZOMBIE_MAX_HEALTH * 2;
    this.hit    = this.maxHit;
}
