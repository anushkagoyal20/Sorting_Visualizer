import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
let arr = [];
let div_id = [];
var speed = 0;    
var c_delay=0;
var size = 10;
var p;

// Resetarr(arr);
const SortVisual = () =>{
    c_delay = 0;
    const [carr,setarr] = useState(arr);
    const [cspeed,setspeed]  = useState(speed);
    const [csize,setsize] = useState(size);
    var delay_time  = 10000/(Math.floor(size/10)*cspeed);
    const Resetarr = (ar) =>{
        div_id = [];
        for(let i = 0; i < csize; i++){
            let a = (Math.floor(Math.random() * 700) + 10);
            ar.push(a);
            div_id.push(a.toString() + "px");
        }
        console.log(div_id);
    }
    const inputEvent1 = (value)=>{
        speed = value;
        setspeed(value);
        return value;
    }

    const inputEvent2 = (value)=>{
        setsize(value);
        return csize;
    }

    console.log(csize);
    const div_update = (cont,height,color)=>{
        p = setTimeout(function(){
            cont.style=" height:" + height + "; background-color:" + color;
        },c_delay+=delay_time);
    }

    const newarr = () =>{
        let k = [];
        Resetarr(k);
        setarr(k);  
        clearTimeout(p);
        // let x;
        // if(size <= 30){
        //     x = (csize)*(4/6);
        // }
        // else{
        //     x = (csize)*1/15;
        // }
        // x = x.toString() +"px";
    
        // for(var i = 0; i < csize; i++){
        //     var bar1 = document.getElementById(i.toString());
        //     if(bar1 != null){
        //         bar1.style.width = x;
        //     }
        // }
    }

    // const stop_sort = () =>{
        
    // }
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
            let k1,k2;
            for (j = 0, stop=len-i; j < stop; j++){
                let a = parseInt(div_id[j], 10);
                let b = parseInt(div_id[j+1], 10);
                if (a > b){         
                    swap(ar,div_id,j, j+1);
                    k1 = document.getElementById(j.toString());
                    k2 = document.getElementById((j+1).toString());
                    div_update(k1,div_id[j],"rgb(29, 199, 29);");
                    div_update(k2,div_id[j+1],"rgb(29, 199, 29);");
                }
            }
            
        }
        return ar;
    }
    function merge(a,start,mid,end){
        let temp = [];
        let i = start;
        let j = mid+1;
        let k = 0;
        while(i <= mid && j <= end){
            if(a[i] <= a[j]){
                temp[k] = a[i];
                div_id[i] =  a[i].toString() + "px"; 
                let k1 = document.getElementById((i).toString());
                div_update(k1,div_id[i],"red");
                k++;
                i++;
            }
            else{
                temp[k] = a[j];
                div_id[j] =  a[j].toString() + "px"; 
                let k1 = document.getElementById((j).toString());
                div_update(k1,div_id[j],"red");
                k++;
                j++;
            }
        }
        while(i <= mid){
            temp[k] = a[i];
                div_id[i] =  a[i].toString() + "px"; 
                let k1 = document.getElementById((i).toString());
                div_update(k1,div_id[i],"red");
                k++;
                i++;
        }
        while(j <= end){
            temp[k] = a[j];
                div_id[j] =  a[j].toString() + "px"; 
                let k1 = document.getElementById((j).toString());
                div_update(k1,div_id[j],"red");
                k++;
                j++;
        }
        for(let l = start; l <= end; l++){
            a[l] = temp[l-start];
            div_id[l] =  a[l].toString() + "px"; 
                let k1 = document.getElementById((l).toString());
                div_update(k1,div_id[l],"rgb(29, 199, 29);");
        }
        return a;
    }
    function mergesort(a,start,end){
        if(start < end){
           let mid = Math.floor((start+end)/2);
           let k1 = document.getElementById(mid.toString());
           div_update(k1,div_id[mid],"yellow");
           mergesort(a,start,mid);
           mergesort(a,mid+1,end);
           merge(a,start,mid,end);
        }
    }

    let insertionSort = (inputArr) => {
        let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let key = inputArr[i];
            let k1 = document.getElementById(i.toString());
            div_update(k1,div_id[i],"yellow");
            let j = i - 1;
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                div_id[j+1] = inputArr[j+1].toString() + "px";
                let k2 = document.getElementById((j+1).toString());
                div_update(k2,div_id[j+1],"red");
                div_update(k2,div_id[j+1],"green");
                j = j - 1;
            }
            inputArr[j + 1] = key;
            div_id[j+1] = inputArr[j+1].toString() + "px";
            let k2 = document.getElementById((j+1).toString());
            div_update(k2,div_id[j+1],"rgb(29, 199, 29);");
        }
        return inputArr;
    };
    const Arrbar = (val,i) =>{
        return(<div className = "bar" id = {i.toString()} key = {i}    
        style = {{height :`${val}px`}}></div>);    
    }
    
    const insertion_sort = () =>{
        let isorted = insertionSort(carr);
        setarr(isorted);

    }
    const bubble_sort = () =>{
        let bsorted =  bubbleSort(carr);
        setarr(bsorted);
        console.log(carr);
    }
    const merge_sort = () =>{
        let start = 0;
        let end = carr.length-1;
        mergesort(carr,start,end);
        setarr(carr);
        console.log(carr);
    }
    
    return(
        <>
            <h1>Sorting Visuilizer</h1>
            <div className = "arr_container">
                {carr.map(Arrbar)}
            </div>
            <div className = "buttons">
                <button onClick = {merge_sort} className = "btn btn-danger">Merge Sort</button>
                <br></br>
                <br></br>
                <button onClick = {insertion_sort} className = "btn btn-danger">Insertion Sort</button>
                <br></br>
                <br></br> 
                <button onClick = {bubble_sort} className = "btn btn-danger">Bubble Sort</button>
                <br></br>
                <br></br>
                <button onClick = {newarr} className = "btn btn-warning">New Array</button>
                <br></br>
                <br></br>
                <Slider
                    defaultValue={50}
                    getAriaValueText={inputEvent1}
                    aria-labelledby="discrete-slider-always"
                    step={5}
                    valueLabelDisplay="on"
                />
                <h4>Speed</h4>
                <br></br>
                <br></br>
                <Slider
                    defaultValue={0}
                    getAriaValueText={inputEvent2}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    valueLabelDisplay="on"
                />
                <h4>Array Size</h4>
            </div>
        </>
    );
}
export default SortVisual;