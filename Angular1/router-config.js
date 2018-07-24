app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "inicio.html"
    })
    .when("/productos", {
        templateUrl : "productos.html"
    })
    .when("/baja", {
        templateUrl : "baja.html"
    })
    .when("/media", {
        templateUrl : "media.html"
    })
    .when("/calentadores", {
        templateUrl : "calentadores.html"
    })
    .when("/servicios", {
        templateUrl : "servicios.html"
    })
    .when("/proyectos", {
        templateUrl : "proyectos.html"
    })
    .when("/planes", {
        templateUrl : "planes.html"
    })
    .when("/blog", {
        templateUrl : "blog.html"
    })
    .when("/contacto", {
        templateUrl : "contacto.html"
    })
    ;
});