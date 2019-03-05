document.addEventListener('DOMContentLoaded', function() {
    var sumObj = {};

    data.forEach((obj) => {
        var type = obj.getType();
        var typeValue = obj.getTypeValue();

        sumObj[type] = (sumObj[type] || 0) + typeValue;
    });

    for (var prop in sumObj) {
        console.log(`Sum of type ${prop} = ${sumObj[prop]}`);

        var newTotal = document.createElement('div');
        newTotal.textContent = `Sum of type ${prop} = ${sumObj[prop]}`;

        document.querySelector('.totals').appendChild(newTotal);
    }
});
