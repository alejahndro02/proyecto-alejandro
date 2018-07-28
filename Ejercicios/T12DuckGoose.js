
 let array  = duck_duck_goose([a, b, c, d], 1)
 let arreglo = duck_duck_goose([a, b, c, d], 4) 
function patoPatoGanso(jugador, ganso)
    {
        return jugador[(ganso-1)% jugador.length].name;

        for (x=0; x <4 ; x++) 
            { 
                for (y=0; y < arr_name ; y++) //for para la cantidad de jugadores
                    { 
                    
                        if (x == 1)//este va a decir quien es pato y quien es ganso 
                            {
                                console.log(array.ganso)
                            
                                break; //para dejar de elegir al ganso
                            }
                        if (y == 4)//este if va a decir si atrapo o no 
                            {  
                                console.log(arreglo.pato)
                            
                            }
                    }
            }
    }
console.log(patoPatoGanso)