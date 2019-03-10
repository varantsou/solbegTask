document.addEventListener("DOMContentLoaded", function() {
    var buttonList = document.querySelector('.panel');
    var btns = document.querySelectorAll('.btn');
    var unit = document.querySelector('.unit');
    var unitHit = document.querySelector('.unit__health');
    var zombieControl = new Engine();
    var timeRefresh = constants.ZOMBIE_DELETE_TIMEOUT;

    buttonList.addEventListener('click', function () {
        if (!event.target.classList.contains('btn--disabled')) {
            if (event.target.classList.contains('btn--create')) {
                zombieControl.create();
            } else {
                if (event.target.dataset.change === 'damage') {
                    zombieControl.change();
                } else if (event.target.dataset.change === 'kill') {
                    zombieControl.change('full');
                }
            }

            // first argument will be disabled, second - enabled
            disableButton('btn--create', 'btn--change');
            render(zombieControl.zombieObj);
        }
    });

    function disableButton(disabled, enabled) {
        btns.forEach(function(btn) {
            if (btn.classList.contains(disabled)) {
                btn.classList.add('btn--disabled');
            }

            if (btn.classList.contains(enabled)) {
                btn.classList.remove('btn--disabled');
            }
        });
    }

    function reset() {
        disableButton('btn');

        setTimeout(function () {
            unit.className = 'unit';
            unitHit.textContent = '100%';
            disableButton('btn--change', 'btn--create');
        }, timeRefresh);
    }

    function render(obj) {
        unit.className = 'unit';
        unit.classList.add(obj.type);
        unitHit.textContent = `${Math.round(obj.hit/obj.maxHit * 100)}%`;

        if (obj.hit <= 0) {
            reset();
        }
    }
});
