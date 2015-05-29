$(function  () {
    var topNavItems = [{label:"Cervezas", url:"/products"}, {label:"Eventos", url:"/events"}, {label:"Contacto", url:"/contact"}, {label:"Acerca de Ni\u00f1o Hurac\u00e1n", url:"/about"}];
    var slideShowItems = [{image:"/img/slide1.jpg", altImage:"Descripcion 1", cssClass:"slide0"}, {image:"/img/slide2.jpg", altImage:"Descripcion 2", cssClass:"slide1 hidden"}, {image:"/img/slide3.jpg", altImage:"Descripcion 3", cssClass:"slide2 hidden"}];
    var footerItems = [{disclaimer:"\u00aeNi\u00f1o Hurac\u00e1n"}, {disclaimer:"Todos los derechos reservados"}, {disclaimer:"El abuso del licor es nocivo para la salud"}]

    var topNavView = Handlebars.templates.topnav(topNavItems);
    var slideShowView = Handlebars.templates.slideshow(slideShowItems);
    var footerView = Handlebars.templates.footer(footerItems);

    $('#topnav').append(topNavView);
    $('#slideshow').append(slideShowView);
    //$('#content-area').append(topNavView);
    $('#footer').append(footerView);
});

