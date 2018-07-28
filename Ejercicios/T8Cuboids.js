function cubo (a,b)
    {
        let as = a.reduce((x,y) => x*y);
        let bs = b.reduce((x,y) => x*y);
        return as > bs ? as-bs: bs-as;
    }
let a = [2, 2, 3];
let b = [5, 4, 1];

console.log(cubo(a,b))