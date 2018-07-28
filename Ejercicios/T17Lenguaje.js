function saludar(idioma)
{
    let bienvenida = 
        {
            ingles:"welcome",
            checo: "Vitejte",
            danes: "Velkomst",
            estoniano: "Tere tulemast",
            frances: "Bienvenue",
            aleman: "Willkommen",
            irlandes: "Failte",
            italiano: "Benvenuto",
            lituano: "Laukiamas",
            polaco: "Witamy",
            español: "Bienvenido",
            sueco: "Valkommen",
            croata: "Croeso"
        }
    return bienvenida.hasOwnProperty(idioma) ? bienvenida[idioma]: bienvenida.ingles;

}