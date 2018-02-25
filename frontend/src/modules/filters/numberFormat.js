function numberFomat () {
    return function(num) {
        return (num.toFixed(2)).replace(".",",");
    }
}

export default numberFomat;