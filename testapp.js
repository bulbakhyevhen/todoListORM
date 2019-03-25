

var array = [1, 2, 3];
var temp;
function writeData(arr){

    return Promise.all(arr.map(createQuery));
    
}

function createQuery(){

    return new Promise((resolve, reject) =>
    {
        temp += array[i];
        resolve(temp);
    })

}


writeData(array).then(() => {return 1});
