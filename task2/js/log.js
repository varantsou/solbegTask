document.addEventListener('DOMContentLoaded', function() {
    var sumObj = {};

    data.forEach( (obj) => {
        var type = obj.getType();
        var typeValue = obj.getTypeValue();

        if (!sumObj.hasOwnProperty(type)) {
            sumObj[type] = typeValue;
        } else {
            sumObj[type] += typeValue;
        }
    });

    for (var prop in sumObj) {
        console.log('Sum of type' + prop + ' = ' + sumObj[prop]);

        var newTotal = document.createElement('div');
        newTotal.innerHTML = `Sum of type ${prop} = ${sumObj[prop]}`;

        document.querySelector('.totals').appendChild(newTotal);
    }
});
