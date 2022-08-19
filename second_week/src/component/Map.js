import React, { useCallback, useEffect, useRef } from "react";


const Map = () =>{    
    const mapRef = useRef(null);

    const initMap = useCallback(() => {
        new window.google.maps.Map(mapRef.current, {
            center: { lat: 10.972758 ,lng: 119.532459  },
            zoom: 16,
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
    }, [initMap]);

    return (
        <div
            className="map"
            style={{ width: "100%", height: "480px" }}
            ref={mapRef}
        >
        </div>
    );
}

export default Map;