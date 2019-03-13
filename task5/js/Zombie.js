function Zombie() {
    // this.maxHit = constants.ZOMBIE_MAX_HEALTH;
    // this.hit = this.maxHit;
}

(function () {
    var layout;
    var health;
    var image;

    // var type = 'zombie-default';
    var maxHit = constants.ZOMBIE_MAX_HEALTH;
    var hit = constants.ZOMBIE_MAX_HEALTH;

    Zombie.prototype.createUnit = function () {
        console.log('Создал объект');

        maxHit = this.maxHit;
        type = this.type;

        layout = document.createElement('div');
        layout.className = 'unit';

        health = document.createElement('div');
        health.className = 'unit__health';
        health.textContent = `${Math.round(hit / maxHit * 100)}%`;
        layout.appendChild(health);

        image = document.createElement('div');
        image.className = 'unit__img';
        image.classList.add(type);
        layout.appendChild(image);
    };

    Zombie.prototype.change = function (damage) {
        health.textContent = `${Math.round(damage / maxHit * 100)}%`;

        if (this.hit <= 0) {
            image.classList.remove(this.type);
            image.classList.add('zombie-dead');
        }
    };

    Zombie.prototype.render = function () {
        var objectLocation = document.querySelector('.area');
        // console.log(layout);
        objectLocation.appendChild(layout);
        console.log('Отрисовал');
    };
}());
