const isValidMobile = (mobile) => {
    let regex = /^[6-9][0-9]{9}$/;
    return regex.test(mobile);
};

module.exports = isValidMobile;