function getUrlParams(busqueda)
{
    let llave = busqueda.slice(busqueda.indexOf('?')+ 1).split('&');
    let parametros = {}
    llave.map(hash =>
        {
            let [key,val] = hash.split('=')
            parametros[key]= decodeURIComponent(val)
        })
    return parametros;
}
console.log(getUrlParams(window.location.busqueda))