let menu = document.getElementById("menu");
let listShow = document.getElementById("list");

let addButton = document.getElementById("addNodeSub");
let addValue = document.getElementById("addNode");
let deleteButton = document.getElementById("deleteNodeSub");
let deleteValue = document.getElementById("deleteNode");
let changeButton= document.getElementById("changeNodeSub");
let changeValueIn = document.getElementById("changeNode");
let changeValue = document.getElementById("changeNodeValue");

let ascending = document.getElementById("ascending");
let descenging = document.getElementById("descending");
let orderType = true;

let check = true;

let listMerge = [];

listShow.innerHTML = listMerge;

function showMenu(){
    if (check){
        menu.style.display = 'flex';
        check = false;
    }else{
        menu.style.display = 'none';
        check = true;
    }
    
}


addButton.addEventListener('click', function() {
    if(addValue.value != ''){
        listMerge.push(addValue.value);
        addValue.value = "";
        listShow.innerHTML = listMerge;
    }
});

deleteButton.addEventListener('click', function() {
    if(deleteValue.value != ''){
        const index = listMerge.indexOf(deleteValue.value);
        if (index > -1) {
            listMerge.splice(index,1);
        }
        deleteValue.value = "";
        listShow.innerHTML = listMerge;
    }
});

changeButton.addEventListener('click', function() {
    if(changeValue.value != '' && changeValueIn != ''){
        const index = listMerge.indexOf(changeValueIn.value);
        if (index !== -1) {
            listMerge[index] = changeValue.value;
        }
        changeValueIn.value = "";
        changeValue.value = "";
        listShow.innerHTML = listMerge;
    }
});

ascending.onclick = function(){ 
    orderType = true;
    let list = mergeSort(listMerge);
    listShow.innerHTML = list;
};

descenging.onclick = function(){ 
    orderType = false;
    let list = mergeSort(listMerge);
    listShow.innerHTML = list;
};


function mergeSort(list){
    let result = [];
    let left = [];
    let right = [];
    if (list.length <= 1){
        return list;
    }
    else{
        for(let i = 0;i<Math.floor(list.length/2);i++){
            left.push(parseInt(list[i]));
        }
        for(let i = Math.floor(list.length/2);i<list.length;i++){
            right.push(parseInt(list[i]));
        }
        
        left = mergeSort(left);
        right = mergeSort(right);
        
        if(orderType){
            if(left[left.length - 1] <= right[0]){
                left.push(...right);
                return left;
            }
        }else{
            if(left[left.length - 1] >= right[0]){
                left.push(...right);
                return left;
            }
        }

        result = merge(left,right);
        
        return result;
    }
}

function merge(left,right){
    let result = [];

    while(left.length > 0 && right.length > 0){
        if(orderType){
            if(left[0] <= right[0]){
                result.push(left[0]);
                left.shift();
             }
             else{
                 result.push(right[0]);
                 right.shift();
             }
        }else{
            if(left[0] >= right[0]){
                result.push(left[0]);
                left.shift();
             }
             else{
                 result.push(right[0]);
                 right.shift();
             }
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