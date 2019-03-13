document.addEventListener("DOMContentLoaded", function(event) {

    var btnsCreate = document.querySelectorAll('.btn--create');
    var btnsChange = document.querySelectorAll('.btn--change');
    var btnCreateStrong = document.querySelector('.btn--create-strong');
    var btnCreateMad = document.querySelector('.btn--create-mad');
    var btnDamage = document.querySelector('.btn--damage');
    var btnKill = document.querySelector('.btn--kill');
    var objectLocation = document.querySelector('.area');


    var engine = new Engine();

    engine.createStrong();
    // engine.createMad();
    engine.damage();

    btnKill.addEventListener('click', function(event) {
        // if (!event.target.classList.contains('btn--disabled')) {
            engine.kill();
        // }
    });
});
