let array = crearArreglo(10);
let vueltas = 1;
console.log('desordenado', array);
ordBurbuja();
console.log('ordenado', array);
function crearArreglo (tamaño) 
    {
        let arr = [];
        for(let i = tamaño; i > 0; i--)
            {
                arr.push(i);
            }
        return arr;
    }
function cambiar (indexA, indexB)
    {
        const temp = array[indexA];
        array [indexA] = array [indexB];
        array [indexB] = temp;
        console.log(vueltas++, '-', indexA , indexB, 'Intercambio===', temp, array[indexA]);
    }
function ordBurbuja()
    {
        for(let i = 0; i < array.length; i++) 
        {
            for(let j = 0; j <array.length - 1; j++) 
            {
                if (array[j] > array[j + 1])
                {
                    cambiar(j, j + 1 )
                }
            }
        }
    }