document.addEventListener('DOMContentLoaded', function () {
    const objCounter = {
        moreZero: 0,
        lessZero: 0,
        equalZero: 0,
        equalNull: 0,
    };
    
    objCounter.elementCount = newData.length;
    
    newData.forEach((item) => {
        if (!isNaN(item) && item !== null) {
            if (item > 0) {
                objCounter.moreZero = +objCounter.moreZero + 1;
            } else if (item < 0) {
                objCounter.lessZero = +objCounter.lessZero + 1;
            } else {
                objCounter.equalZero = +objCounter.equalZero + 1;
            }
        }
    });

    console.log('Elements count:', objCounter.elementCount);
    console.log('Elements more than zero:', objCounter.moreZero);
    console.log('Elements less than zero:', objCounter.lessZero);
    console.log('Elements equal to zero:', objCounter.equalZero);
    console.log('Elements equal to null:', objCounter.equalNull);

    document.querySelector('.total-count > span').innerHTML = objCounter.elementCount;
    document.querySelector('.more-count > span').innerHTML = objCounter.moreZero;
    document.querySelector('.less-count > span').innerHTML = objCounter.lessZero;
    document.querySelector('.equal-count > span').innerHTML = objCounter.equalZero;
    document.querySelector('.null-count > span').innerHTML = objCounter.equalNull;
});