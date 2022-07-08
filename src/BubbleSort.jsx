import React from 'react';
import div_update from './Animation.jsx';
function swap(ar,div_id,first_Index, second_Index){
    let temp = ar[first_Index];
    ar[first_Index] = ar[second_Index];
    ar[second_Index] = temp;
    let k1 = document.getElementById(first_Index.toString());
    let k2 = document.getElementById(second_Index.toString());
    div_id[first_Index] =  ar[first_Index].toString() + "px";
    div_id[second_Index] = ar[second_Index].toString() + "px";  
    
    div_update(k1,div_id[first_Index],"red");
    div_update(k2,div_id[second_Index],"red");
    
}
function bubbleSort(ar){
    let len = ar.length,
        i, j, stop;

    for (i = 0; i < len; i++){
        for (j = 0, stop=len-i; j < stop; j++){
            let a = parseInt(div_id[j], 10);
            let b = parseInt(div_id[j+1], 10);
            if (a > b){         
                swap(ar,div_id,j, j+1);
                let k1 = document.getElementById(j.toString());
                let k2 = document.getElementById((j+1).toString());
                div_update(k1,div_id[j],"rgb(29, 199, 29);");
                div_update(k2,div_id[j+1],"rgb(29, 199, 29);");
            }
        }
        
    }
    return arr;
}

export default bubbleSort;