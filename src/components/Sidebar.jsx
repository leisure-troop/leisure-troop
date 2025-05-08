import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <NavLink to="/" className="sidebar-link">  All Trips</NavLink>
            <NavLink to="/created" className="sidebar-link"> My Trips</NavLink>
            <NavLink to="/favorites" className="sidebar-link"> Favorites</NavLink>
        </div>
    );
}
export default SideBar;