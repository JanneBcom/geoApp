var fn = {
    ready: function(){
        document.addEventListener("deciveready",fn.init,false)
    },
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
    }
};
$(fn.ready);
