var newData = [];

data.forEach((item) => {
    if (!isNaN(item) && item !== null) {
        newData.push(Number(item) + 1);
    } else {
        newData.push(item);
    }
});