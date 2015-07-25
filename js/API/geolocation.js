var geo={
    lat: null,
    lng: null,
    getPosition: function(){
        navigator.geolocation.getCurrentPosition(geo.sucess, geo.error);
    },
    error: function(err){
        alert(err.code);
    },
    sucess: function(p){
        geo.lat = p.coords.latitude;
        geo.lng = p.coords.longitude
        ;
    }
};