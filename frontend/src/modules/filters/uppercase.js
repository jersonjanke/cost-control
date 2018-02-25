function uppercase() {
    return function (input) {
        input = input.toUpperCase();
        return input;
    };
}

export default uppercase;