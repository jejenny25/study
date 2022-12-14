import React from "react";
import GoogleMapReact from 'google-map-react';

import { ReactComponent as IcoHome } from "../assets/svg/ico-home.svg";
import { ReactComponent as IcoLogo } from "../assets/svg/ico-logo-marker.svg";

const AnyReactComponent = ({ text }) => <div className="map-marker"><IcoHome className="ico-home"/> <IcoLogo className="ico-logo" /></div>;

const Map = () =>{ 
    
    const defaultProps = {
        center: {
            lat: 10.972758,
            lng: 119.532459
            },
            zoom: 14
        };
    
    const mapOptions = {
        styles: [
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                    "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                    "color": "#d1c9c6"
                    }
                ]
            },
            {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                "color": "#b3e6f4"
                }
            ]
            }
        ]
    };

    return (
        <div className="map" style={{ height: '480px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: "AIzaSyBYMFlWPPaJLPACgTKGXC5DE51hLRvD6Tg",
                    language: 'ko',
                    region: 'KR'
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={mapOptions}
            >
                <AnyReactComponent
                    lat={10.975086}
                    lng={119.530339}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default Map;
