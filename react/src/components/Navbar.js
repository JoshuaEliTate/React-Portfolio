import React from 'react';
import { Link } from 'react-router-dom'
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';
import PDF from '../documents/resume.pdf'

// TODO: Create a styles object called "styles"
const styles = {
  list: {
    "list-style": "none",
    margin: "auto",
    display: "flex",    
    placeContent: 'center',  
    "flex-direction": "row",    
    "flex-wrap": "wrap"
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
            <a style={styles.decoration} href={PDF} target="_blank">
                <p>Resume</p>
            </a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
