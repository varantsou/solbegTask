document.addEventListener("DOMContentLoaded", function(event) {
    var btnCreateStrong = document.querySelector('.btn-create-strong');
    var btnCreateMad = document.querySelector('.btn-create-mad');
    var btnDamage = document.querySelector('.btn-damage');
    var btnKill = document.querySelector('.btn-kill');
    var container = document.querySelector('.area');
    var disabledClassName = 'btn--disabled';

    var engine = new Engine(container, function(eventName) {
        if (eventName === 'created') {
            disableButton(btnCreateStrong);
            disableButton(btnCreateMad);
        } else if (eventName === 'killed') {
            disableButton(btnCreateStrong);
            disableButton(btnCreateMad)
            disableButton(btnDamage);
            disableButton(btnKill);
        } else if (eventName === 'deleted') {
            enabledButton(btnCreateStrong);
            enabledButton(btnCreateMad);
            disableButton(btnDamage);
            disableButton(btnKill);
        }
    });

    btnCreateStrong.addEventListener('click', function() {
        if (!isDisabled(btnCreateStrong)) {
            engine.createStrong();

            disableButton(btnCreateStrong);
            disableButton(btnCreateMad);
            enabledButton(btnDamage);
            enabledButton(btnKill);
        }
    });

    btnCreateMad.addEventListener('click', function() {
        if (!isDisabled(btnCreateMad)) {
            engine.createMad();

            disableButton(btnCreateStrong);
            disableButton(btnCreateMad);
            enabledButton(btnDamage);
            enabledButton(btnKill);
        }
    });

    btnDamage.addEventListener('click', function() {
        if (!isDisabled(btnDamage)) {
            engine.damage();
        }
    });

    btnKill.addEventListener('click', function() {
        if (!isDisabled(btnKill)) {
            engine.kill();
        }
    });

    function isDisabled(btn) {
        return btn.classList.contains(disabledClassName);
    }

    function disableButton(btn) {
        btn.classList.add(disabledClassName);
    }

    function enabledButton(btn) {
        btn.classList.remove(disabledClassName);
    }
});
