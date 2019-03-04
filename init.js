var data = [];

data[0] = 5;
data[1] = null;
data[2] = -2;
data[3] = 0;
data[5] = 13;
data[6] = 'a';
data[7] = '-40';
data[8] = 24;
data[9] = '0';


var newData = [];

data.forEach(function(item){
    if (typeof(item) == 'number'){
        newData.push(Number(item + 1))
    }
    
    else if(typeof(item) == 'string'){
        if (!isNaN(item)){
            newData.push(Number(item) + 1)
        }   else{
            newData.push(item)
        }
    }   

    else{
        newData.push(item)
    }
     
})