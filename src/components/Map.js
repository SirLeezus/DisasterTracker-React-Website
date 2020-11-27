import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import FireMarker from './markers/FireMarker';
import StormMarker from './markers/StormMarker';
import IceMarker from './markers/IceMarker';

const NATURAL_EVENT_WILDFIRE = 8;
const SEVERE_STORMS = 10;
const ICE = 15;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <FireMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })} />
        } else if (ev.categories[0].id === SEVERE_STORMS) {
            return <StormMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description})} />
        } else if (ev.categories[0].id === ICE) {
            return <IceMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDBgqjOerCe1kiZI_VNoopnYIHglemF0Rs' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.313043,
        lng: -101.988121
    },
    zoom: 6
}

export default Map