function ZombieMad(callBack, objectLocation) {
    var maxHealth = constants.ZOMBIE_MAX_HEALTH / 2;

    Zombie.call(this, callBack, objectLocation, 'zombie-mad', maxHealth);
}
