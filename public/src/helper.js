const add = (items) => {
    let ret = 0;
    for (let i = 0; i < items.length; i++) {
        ret += items[i];
    }
    return ret;
}
const multiply = (items) => {
    let ret = 1;
    for (let i = 0; i < items.length; i++) {
        ret *= items[i];
    }
    return ret;
}