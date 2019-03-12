function ZombieMad(callBack, objectLocation) {
    Zombie.call(this, 'zombie-mad', callBack, objectLocation);

    this.maxHit = constants.ZOMBIE_MAX_HEALTH / 2;
    this.hit = this.maxHit;
}
