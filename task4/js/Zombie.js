function Zombie(callback, objectLocation, className, maxHealth) {
    var timeReboot = constants.ZOMBIE_DELETE_TIMEOUT;
    var speed = constants.ZOMBIE_SPEED;
    var layout;
    var healthLayout;
    var image;
    var layoutClassName = `unit__img ${className}` || 'unit__img';
    var maxHit = maxHealth || constants.ZOMBIE_MAX_HEALTH;
    var health = maxHit;

    var position = 0;

    layout = document.createElement('div');
    layout.className = 'unit';

    healthLayout = document.createElement('div');
    healthLayout.className = 'unit__health';
    healthLayout.textContent = '100%';
    layout.appendChild(healthLayout);

    image = document.createElement('div');
    image.className = layoutClassName;

    layout.appendChild(image);

    callback('created');

    objectLocation.appendChild(layout);

    var refreshInterval = setInterval(run, speed);

    function updateHit() {
        healthLayout.textContent = `${Math.round(health / maxHit * 100)}%`;

        if (health <= 0) {    
            healthLayout.textContent = '0'
            image.classList.add('zombie-dead');

            finish();
        }
    }

    this.hit = function(damage) {
        health -= damage;
        updateHit(health);
    };

    this.kill = function() {
        health = 0;
        updateHit(health);
    }

    
    function run() {
        if (position < objectLocation.clientWidth) {
            layout.style.right = position + 'px';
        } else {
            finish();
        }

        position++;
    }

    function finish() {
        callback('killed');
        clearInterval(refreshInterval);

        setTimeout(function () {
            objectLocation.removeChild(layout);
            callback('deleted');
        }, timeReboot);
    }
}
