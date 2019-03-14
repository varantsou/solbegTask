function ZombieMad(container, callback) {
    var args = {
        callback,
        container,
        className: 'unit__zombie-mad',
        maxHealth: constants.ZOMBIE_MAX_HEALTH / 2,
    };

    Zombie.call(this, args);
}
