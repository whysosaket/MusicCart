const isValidMobile = (mobile) => {
    let regex = /^[6-9][0-9]{9}$/;
    return regex.test(mobile);
};

export default isValidMobile;