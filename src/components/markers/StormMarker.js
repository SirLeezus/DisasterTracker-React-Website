import { Icon } from '@iconify/react'
import stormIcon from '@iconify-icons/mdi/weather-cloudy-alert'

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="storm-marker" onClick={onClick}>
            <Icon icon={stormIcon} className="storm-icon" />
        </div>
    )
}

export default StormMarker