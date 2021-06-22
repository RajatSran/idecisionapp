console.log('utils.js is running');

export const square = (x) => x*x;
export const add= (a,b) => a+b;
export const adult=(age)=> {
    if (age>18) {
        return true;
    } else {
        return false;
    }
}
const subtract =(a,b)