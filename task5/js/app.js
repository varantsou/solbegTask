document.addEventListener("DOMContentLoaded", function(event) {

    var btnsCreate = document.querySelectorAll('.btn--create');
    var btnsChange = document.querySelectorAll('.btn--change');
    var btnCreateStrong = document.querySelector('.btn--create-strong');
    var btnCreateMad = document.querySelector('.btn--create-mad');
    var btnDamage = document.querySelector('.btn--damage');
    var btnKill = document.querySelector('.btn--kill');
    var objectLocation = document.querySelector('.area');


    var engine = new Engine();

    // var engine = new Engine(function(eventName) {
    //     if (eventName === 'created') {
    //         disableButton(btnsCreate);
    //     } else if (eventName === 'killed') {
    //         disableButton(btnsCreate);
    //         disableButton(btnsChange);
    //     } else if (eventName === 'deleted') {
    //         disableButton(btnsChange);
    //         enabledButton(btnsCreate);
    //     }
    // }, objectLocation);

    btnCreateStrong.addEventListener('click', function(event) {
        if (!event.target.classList.contains('btn--disabled')) {
            engine.createStrong();
            // disableButton(btnsCreate);
            enabledButton(btnsChange);
        }
    });

    btnCreateMad.addEventListener('click', function(event) {
        if (!event.target.classList.contains('btn--disabled')) {
            engine.createMad();
            // disableButton(btnsCreate);
            enabledButton(btnsChange);
        }
    });

    btnDamage.addEventListener('click', function(event) {
        if (!event.target.classList.contains('btn--disabled')) {
            engine.damage();
        }
    });

    btnKill.addEventListener('click', function(event) {
        if (!event.target.classList.contains('btn--disabled')) {
            engine.kill();
        }
    });

    function disableButton(disabledBtns) {
        disabledBtns.forEach(function(btn) {
            btn.classList.add('btn--disabled');
        });
    }

    function enabledButton(enambleddBtns) {
        enambleddBtns.forEach(function(btn) {
            btn.classList.remove('btn--disabled');
        });
    }
});
