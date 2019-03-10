var constants = {
	ZOMBIE_MAX_HEALTH: 100,
	ZOMBIE_HIT_DAMAGE: 10,
	ZOMBIE_DELETE_TIMEOUT: 3500
};

function random(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}
