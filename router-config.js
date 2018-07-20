app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "inicio.htm"
    })
    .when("/productos", {
        templateUrl : "productos.htm"
    })
    .when("/proyectos", {
        templateUrl : "proyectos.htm"
    })
    .when("/planes", {
        templateUrl : "planes.htm"
    })
    .when("/blog", {
        templateUrl : "blog.htm"
    })
    .when("/contacto", {
        templateUrl : "contacto.htm"
    })
    ;
});