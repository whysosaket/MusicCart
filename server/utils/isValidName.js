const isValidName = (name) => {
    let regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
};

export default isValidName;