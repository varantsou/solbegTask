document.addEventListener('DOMContentLoaded', function() {

    var units = 5;
    var minType = 1;
    var maxType = 3;
    var minTypeValue = 1;
    var maxTypeValue = 10;

    function  objConstruct() {
        var typeN = random(minType, maxType);
        var typeNValue = random(minTypeValue, maxTypeValue);

        var obj = {};

        obj[`type${typeN}`] = typeNValue;

        obj.getType = function () {
            return typeN;
        };

        obj.getTypeValue = function () {
            return typeNValue;
        };

        return obj;
    }

    for (var i = 0; i < units; i++) {

        var a = objConstruct();
        var newChild = document.createElement('div');
        console.log(` Element${i}: Type${a.getType()} TypeValue: ${a.getTypeValue()}`);
        newChild.innerHTML = `Element: ${i}: Type: ${a.getType()} TypeValue: ${a.getTypeValue()}`;
        document.querySelector('.items').appendChild(newChild);

        data.push(a);
    }
});
