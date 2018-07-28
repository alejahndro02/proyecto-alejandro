
let mipalabra = 'bsjq'
let micadena = [ 'Ajylvpy', 'ylvpyAj', 'jylvpyA', 'lvpyAjy', 'pyAjylv', 'vpyAjyl', 'ipywee']

function rotaciones(lapalabra) 
    {
      let rotacion = []
      for (let i = 0; i < lapalabra.length; i++) 
          {
            let parte1 = lapalabra.substring(i)
            let parte2 = lapalabra.substring(0, i)
            rotacion.push(parte1 + parte2)
          }
      return rotacion
    }

function contain_all_rots(palabra, cadena) 
    {
        let rotacion2 = rotaciones(palabra)
        console.log(rotacion2)
        for (let j = 0; j < rotacion2.length; j++) 
            {
                if (!cadena.includes(rotacion2[j])) 
                {
                  console.log(rotacion2[j])
                  return false
                }
            }
        return true



    }
console.log(contain_all_rots(mipalabra, micadena))