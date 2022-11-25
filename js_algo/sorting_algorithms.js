function bubble_sort(curr_list){
    let len = curr_list.length
    for (let i = 0; i < len; i++) {
        for(let j = 0; j <  len - i - 1 ; j++){

            if(curr_list[j] > curr_list[j+1] ){
                let tmp = curr_list[j];
                curr_list[j] = curr_list[j+1]
                curr_list[j+1] = tmp;
            }
        }
    }
    return curr_list
}

let quick_sort = (list) => {
    console.log(list)
    let list_inf = [];
    let list_eq = [];
    let list_sup = [];
    if (list.length  <= 1){
        return list
    }

    let mid_id = Math.round(list.length / 2)
    let val = list[mid_id]

    for (let curr_val of list){
        if (curr_val > val){
            list_sup.push(curr_val)
        }else if(curr_val < val){
            list_inf.push(curr_val)
        }else{
            list_eq.push(curr_val)
        }   
    }

    return quick_sort(list_inf).concat(list_eq).concat(quick_sort(list_sup))
}

console.log(bubble_sort([1, 9, 4, 29, 2, 3]))
console.log(quick_sort([1, 9, 4, 29, 2, 3]))