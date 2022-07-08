const div_update = (cont,height,color)=>{
        setTimeout(function(){
            cont.style=" height:" + height + "; background-color:" + color + ";";
        },c_delay+=delay_time);
}

export default div_update;