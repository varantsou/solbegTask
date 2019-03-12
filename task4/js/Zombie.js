function Zombie(type, callback, objectLocation) {
    var timeReboot = constants.ZOMBIE_DELETE_TIMEOUT;
    var self = this;
    var layout;
    var health;
    var image;

    this.type = type;
    this.maxHit = constants.ZOMBIE_MAX_HEALTH;
    this.hit = constants.ZOMBIE_MAX_HEALTH;

    callback('created');

    this.createUnit = function() {
        layout = document.createElement('div');
        layout.className = 'unit';

        health = document.createElement('div');
        health.className = 'unit__health';
        health.textContent = `${Math.round(this.hit / this.maxHit * 100)}%`;
        layout.appendChild(health);

        image = document.createElement('div');
        image.className = 'unit__img';
        image.classList.add(this.type);
        layout.appendChild(image);

        render();
    };

    this.change = function(damage) {
        health.textContent = `${Math.round(damage / this.maxHit * 100)}%`;

        if (self.hit <= 0) {
            image.classList.remove(this.type);
            image.classList.add('zombie-dead');

            callback('killed');

            setTimeout(function () {
                objectLocation.removeChild(layout);
                callback('deleted');
            }, timeReboot);
        }

        render();
    };

    function render() {
        objectLocation.appendChild(layout);
    }
}
