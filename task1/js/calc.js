for (var i = 0; i < data.length; i++) {
    if (data[i] === undefined || data[i] === NaN || data[i] === '' || data[i] === 'object' || data[i] === true || data[i] === false) {
        data.splice(i, 1);
    }

    if (data[i] !== '' && data[i] !== undefined && data[i] !== 'object') {
        if (!isNaN(data[i]) && data[i] !== null) {
            data[i] = (Number(data[i]) + 1);
        } else {
            data[i] = data[i];
        }
    }
}
