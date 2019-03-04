(function(){
    var objCounter = {
        moreZero: 0,
        lessZero: 0,
        equalZero: 0,
        equalNull: 0
    };

    objCounter.elementCount = newData.length;

    newData.forEach(function(item){
        if(typeof(item) == 'number'){
            if (item > 0){
                if(objCounter.hasOwnProperty('moreZero')){
                    objCounter.moreZero = +objCounter.moreZero + 1;
                }
            }   else if (item < 0){
                if(objCounter.hasOwnProperty('lessZero')){
                    objCounter.lessZero = +objCounter.lessZero + 1;
                }
            }   else{
                if(objCounter.hasOwnProperty('equalZero')){
                    objCounter.equalZero = +objCounter.equalZero + 1;
                }
            }
        }   else if(item == null){
            if(objCounter.hasOwnProperty('equalNull')){
                objCounter.equalNull = +objCounter.equalNull + 1;
            }
        }
    })


    function writeStatistic(statistic){
        console.log('Elements count:', statistic.elementCount);
        console.log('Elements more than zero:', statistic.moreZero);
        console.log('Elements less than zero:', statistic.lessZero);
        console.log('Elements equal to zero:', statistic.equalZero);
        console.log('Elements equal to null:', statistic.equalNull);

        document.querySelector('.total-count > span').innerHTML = statistic.elementCount;
        document.querySelector('.more-count > span').innerHTML = statistic.moreZero;
        document.querySelector('.less-count > span').innerHTML = statistic.lessZero;
        document.querySelector('.equal-count > span').innerHTML = statistic.equalZero;
        document.querySelector('.null-count > span').innerHTML = statistic.equalNull;
    }

    writeStatistic(objCounter)
}())