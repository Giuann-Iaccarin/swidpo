import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Swidpo
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lessons" className="nav-link">Lessons</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/videos" className="nav-link">Videos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link profile-link">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
