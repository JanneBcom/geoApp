var fn = {
    
    init: function(){
        geo.getPosition();
        //Posición del mapa
        var latlng = new google.maps.LatLng(geo.lat, geo.lng);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        //Marcador
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            title:"Mi posición"
        });
    },
    ready: function(){
        document.addEventListener("deviceready",fn.init,false)
    }
};
$(fn.ready);