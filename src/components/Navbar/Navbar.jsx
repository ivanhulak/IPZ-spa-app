import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
   const navLinkStyles = ({isActive}) => {
      return {
        color: isActive ? 'rgb(136, 109, 245)' : `#000`,
        fontWeight: isActive ? '700' : "400",
      }
    }
   return (
      <nav className={styles.navBar}>
         <NavLink to='/main' style={navLinkStyles}>Головна</NavLink>
         <NavLink to='/members' style={navLinkStyles}>Учасники</NavLink>
         <NavLink to='/fithces' style={navLinkStyles}>Фічі</NavLink>
         <NavLink to='/labs' style={navLinkStyles}>Лаби</NavLink>
         <NavLink to='/settings' style={navLinkStyles}>Налаштування</NavLink>
      </nav>
   );
}

export default Navbar;