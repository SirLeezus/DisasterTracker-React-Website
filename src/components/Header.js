import { Icon } from '@iconify/react'
import earthWestIcon from '@iconify-icons/geo/ui-earth-west'

const Header = () => {
    return (
        <header class ="header">
            <h1><Icon icon={earthWestIcon} /> Disaster Tracker (Powered by NASA)</h1>
            
        </header>
    )
}

export default Header

