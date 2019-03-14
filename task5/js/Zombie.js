function Zombie(args) {
    var callback = args.callback;
    var container = args.container;

    var layoutClassName = args.className ? `unit__img ${args.className}` : 'unit__img';
    var maxHit = args.maxHealth || constants.ZOMBIE_MAX_HEALTH;

    var timeReboot = constants.ZOMBIE_DELETE_TIMEOUT;
    var speed = constants.ZOMBIE_SPEED;
    var layout;
    var healthLayout;
    var image;


    var health = maxHit;
    var position = 0;
    var refreshInterval = setInterval(run, speed);

    layout = document.createElement('div');
    layout.className = 'unit';

    healthLayout = document.createElement('div');
    healthLayout.className = 'unit__health';
    healthLayout.textContent = '100%';
    layout.appendChild(healthLayout);

    image = document.createElement('div');
    image.className = layoutClassName;

    layout.appendChild(image);

    container.appendChild(layout);

    callback('created');

    function finish() {
        callback('killed');
        clearInterval(refreshInterval);
        setTimeout(function () {
            container.removeChild(layout);
            callback('deleted');
        }, timeReboot);
    }

    function updateHit() {
        healthLayout.textContent = `${Math.round(health / maxHit * 100)}%`;

        if (health <= 0) {
            healthLayout.textContent = '0';
            image.classList.add('unit__zombie-dead');
            position = 0;
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
    };

    function run() {
        if (position < container.clientWidth) {
            layout.style.right = position + 'px';
        } else {
            finish();
        }

        position++;
    }
}
