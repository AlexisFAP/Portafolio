let test = [1,3,4,8,2];

console.log(test);
let result1 = mergeSortD(test);
let result2 = mergeSortA(test);

console.log(result1,'descendiente');
console.log(result2, 'ascendiente');

//More to Less
function mergeSortD(list){
    let result = [];
    let left = [];
    let right = [];
    if (list.length <= 1){
        return list;
    }
    else{
        for(let i = 0;i<Math.floor(list.length/2);i++){
            left.push(list[i]);
        }
        for(let i = Math.floor(list.length/2);i<list.length;i++){
            right.push(list[i]);
        }
        
        left = mergeSortD(left);
        right = mergeSortD(right);
        
        if(left[left.length - 1] >= right[0]){
            left.push(...right);
            return left;
        }
        
        result = mergeD(left,right);
        
        return result;
    }
}

function mergeD(left,right){
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] >= right[0]){
           result.push(left[0]);
           left.shift();
        }
        else{
            result.push(right[0]);
            right.shift();
        }
    }
    if(left.length > 0 ){
        result.push(...left);
    }
    if(right.length > 0 ){
        result.push(...right);
    }
    return result;
}

//Less to More
function mergeSortA(list){
    let result = [];
    let left = [];
    let right = [];
    if (list.length <= 1){
        return list;
    }
    else{
        for(let i = 0;i<Math.floor(list.length/2);i++){
            left.push(list[i]);
        }
        for(let i = Math.floor(list.length/2);i<list.length;i++){
            right.push(list[i]);
        }
        
        left = mergeSortA(left);
        right = mergeSortA(right);
        
        if(left[left.length - 1] <= right[0]){
            left.push(...right);
            return left;
        }
        
        result = mergeA(left,right);
        
        return result;
    }
}

function mergeA(left,right){
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]){
           result.push(left[0]);
           left.shift();
        }
        else{
            result.push(right[0]);
            right.shift();
        }
    }
    if(left.length > 0 ){
        result.push(...left);
    }
    if(right.length > 0 ){
        result.push(...right);
    }
    return result;
}