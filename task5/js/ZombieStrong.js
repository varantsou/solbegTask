function ZombieStrong(callBack, objectLocation) {
    Zombie.call(this, 'zombie-strong', callBack, objectLocation);

    this.maxHit = constants.ZOMBIE_MAX_HEALTH * 2;
    this.hit = this.maxHit;
}
