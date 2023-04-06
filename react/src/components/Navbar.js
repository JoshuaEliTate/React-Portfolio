import React from 'react';
import { Link } from 'react-router-dom'
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  list: {
    display: "flex",    
    "justify-content": "space-between",    
    "flex-direction": "row",    
    // "flex-wrap": "wrap"
    },
    listItem: {
      height: "30px",
      "margin-right": "30px",
    }

}
const Navbar = ({ setCurrentPage }) => {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      {/* <a style={styles.navbarA} href="/">Welcom</a> */}
      <ul  style={styles.list}>
            <li className="minWidth" style={styles.listItem}>
                <Link to="/"  style={styles.listItem}>
                    <p>About Me</p>
                </Link>
            </li >
            <li  style={styles.listItem}>
                <Link to="/portfolio"  style={styles.listItem}>
                    <p>Portfolio</p>
                </Link>
            </li>
            <li  style={styles.listItem}>
                <Link to="/contact"  style={styles.listItem}>
                    <p>Contact</p>
                </Link>
            </li>
            <li  style={styles.listItem}>
                <Link to="/resume">
                    <p>Resume</p>
                </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
