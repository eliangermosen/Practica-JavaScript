// export function sumar(a,b){
//     return a+b;
// }

// export function restar(a,b){
//     return a-b;
// }

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

//se puede exportar como objeto tambien
export const aritmetica = {
    sumar,
    restar
};
