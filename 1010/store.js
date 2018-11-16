var dao = (function dao(map) {
    var map = map;


    function clearMarkers() {

        for(var store of arr){
            if(store.marker){
                store.marker.setMap(null);
            }
        }
    }
    function showMarker() {

        console.log(arr.length);
        for(store of arr) {
            if (!store.marker) {
                store.marker = new daum.maps.Marker({
                    position: new daum.maps.LatLng(store.lat, store.lng),
                    map: map
                }
                );
            } else {
                store.marker.setMap(map);

            }
        }
    }

    return {

        showMarker: showMarker,
        clearMarkers:clearMarkers

    }

})(map);