const numberWithCommas = (num) => {
    if (num == null || isNaN(num)) {
        return ''; 
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default numberWithCommas;
