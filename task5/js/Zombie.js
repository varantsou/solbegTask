function Zombie() {

}

(function () {
    var timeReboot = constants.ZOMBIE_DELETE_TIMEOUT;
    var speed = constants.ZOMBIE_SPEED;
    var objectLocation = document.querySelector('.area');
    // var objectLocation;
    var layout;
    var healthLayout;
    var image;
    var layoutClassName = 'unit__img ';

    var maxHit = constants.ZOMBIE_MAX_HEALTH;
    var health = maxHit;

    var position = 0;
    var refreshInterval;


    Zombie.prototype.createUnit = function () {
        // objectLocation = this.objectLocation;

        console.log(this);

        layoutClassName += this.className;
        maxHit = this.maxHit || maxHit;
        health = maxHit;

        layout = document.createElement('div');
        layout.className = 'unit';

        healthLayout = document.createElement('div');
        healthLayout.className = 'unit__health';
        healthLayout.textContent = '100%';
        layout.appendChild(healthLayout);

        image = document.createElement('div');
        image.className = layoutClassName;

        layout.appendChild(image);
        objectLocation.appendChild(layout);


        // this.callback('created');

        refreshInterval = setInterval(run, speed);
    };

    Zombie.prototype.updateHit = function() {
        healthLayout.textContent = `${Math.round(health / maxHit * 100)}%`;

        if (health <= 0) {
            healthLayout.textContent = '0';
            image.classList.add('zombie-dead');
            position = 0;
            finish();
        }
    };

    Zombie.prototype.hit = function (damage) {
        health -= damage;
        Zombie.prototype.updateHit();
    };

    Zombie.prototype.kill = function () {
        health = 0;
        Zombie.prototype.updateHit();
    };

    function run() {
        if (position < objectLocation.clientWidth) {
            layout.style.right = position + 'px';
        } else {
            finish();
        }

        position++;
    }

    function finish() {
        // callback('killed');
        clearInterval(refreshInterval);

        setTimeout(function () {
            objectLocation.removeChild(layout);
            // callback('deleted');
        }, timeReboot);
    }
}());
