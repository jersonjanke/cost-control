function numberFomat () {
    return function(num) {
        if(num) {
            return (num.toFixed(2)).replace(".",",");
        } else {
            return 0;
        }
    }
}

export default numberFomat;