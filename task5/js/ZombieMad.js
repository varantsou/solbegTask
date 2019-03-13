function ZombieMad(callback, objectLocation) {

    var args = {
        callback,
        objectLocation,
        className: 'zombie-mad',
        maxHealth: constants.ZOMBIE_MAX_HEALTH / 2
    };

    Zombie.call(this, args);
}
