import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink 
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                    to="/">
                        Home
                </NavLink>
            </li>
            <li className="nav-item">
                <span className="nav-link disabled">Teach</span>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/videos">
                                Videos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/articles">
                                Articles
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/visualaids">
                                Visual Aids
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <span className="nav-link disabled">Code</span>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/fullstack">
                                Fullstack
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/frontend">
                                Frontend
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/wordpress">
                                Wordpress
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <span className="nav-link disabled">Draw</span>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/graphics">
                                Graphics
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/illustration">
                                Illustration
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                            to="/ads">
                                Advertisements
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <NavLink 
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                    to="/write">
                        Write
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                    to="/about">
                        About
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav;