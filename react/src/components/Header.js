import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import Navbar from './Navbar';
import '../styles/Header.css'

const styles = {

  spacing: {
    display: 'flex',
    placeContent: 'center',
    "flexDirection": 'row',
    "flexWrap": "wrap",
    // "paddingBottom": "15px",
  },

  header: {
    display: 'flex',
    "flexDirection": 'row',
    "flexWrap": 'wrap',
    "alignItems": 'center',
    color: 'white',
    width: '100%',
    'lineHeight': 'unset',
    padding: '0px',
    "margin-top": "-25px",
    'justifyContent': 'flex-end',
    display: 'flex',
    background: '#262626',
    borderRadius: '20px',
    justifyContent: 'center',
    padding: '10px 0px',
  }

}
function Header() {

  return (

    <header className='centerify'>
      <section className="header" style={styles.header}>
      <img className='logoSize' src={require("../img/Logo.JPG")} alt="A logo of JT"/>
            <nav className="spacing"style={styles.spacing}>
              <Navbar />
            </nav>
      </section>

    </header>

  );
}

export default Header;


// {/* <figure className="flex" style={styles.flex}>
// <h1 className="box" style={styles.box}>Josh Torres</h1>
// </figure> */}