import { Link } from 'react-router-dom'
import logo from '../logo_fishEye.png'
export default function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="FishEye" />
        </Link>
    )

}