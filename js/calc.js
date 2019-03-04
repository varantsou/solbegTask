var newData = [];
var i = 0;

for (i = 0; i < data.length; i++) {
    if (data[i] !== '' && data[i] !== undefined) {
        if (!isNaN(data[i]) && data[i] !== null) {
            newData.push(Number(data[i]) + 1);
        } else {
            newData.push(data[i]);
        }
    }
}
