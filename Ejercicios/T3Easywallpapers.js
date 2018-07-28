function wallpaper(l, w, h) 
{
  let rollSize = (10 * .52);
  let newH = (h * .15) + h; //error previsto del 15%
  let areaToCover = 2 *((l*newH) + (w*newH));
  let r = Math.ceil(areaToCover/rollSize); //resultado de la operacion de area acubrir entre el tamaño del rollo
  let numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    if (r > 0 && r < 21) // se asegura que no pase del 20
    {  
      return numberWords[r-1];// la posicion r no coincide con el contenido de dicha posicion  en el arrglo, entonces r-1  
    } else if (r === 0) // si r es igual a 0 no se comprara rollos
    { 
      return "zero";
    } else 
    {   
      return r;// devuelve el valor de r en numero y no en string para los casos que son mayor a 20 rollos
    }
}
console.log (wallpaper(6, 2.9, 3))