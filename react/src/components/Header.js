import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import Navbar from './Navbar';

const styles = {
  headerH1: {
    margin: 0,
    "paddingTop": "75px",
    "textAlign": "center",
    color:  "black",
    "fontSize": "3rem"
  },
  spacing: {
    display: 'flex',
    "justifyContent": "space-between",
    "flexDirection": 'row',
    "flexWrap": "wrap",
  },
  flex: {
    display: 'flex',
    "flexDirection": 'row',
    "alignItems": 'center',
  },
  box: {
    'backgroundColor': 'rgb(53, 53, 53)',
    padding: '5px 20px 5px 20px',
    'marginTop': '15px',
    'marginBottom': '10px',
},
header: {
  display: 'flex',
  "flexDirection": 'row',
  "flexWrap": 'wrap',
  "alignItems": 'center',
  color: 'white',
  'borderBottom': '5px',
  'borderBottomStyle': 'solid',
  'borderColor': 'rgb(30, 30, 30)',
  'backgroundColor': 'rgb(97, 96, 96)',
  width: '100%',
  'lineHeight': 'unset',
  padding: '0px',
  'justifyContent': 'space-between',
}

}
function Header() {

  return (
    <header className="header" style={styles.header}>
            <figure className="flex" style={styles.flex}>
                <h1 className="box" style={styles.box}>Josh Torres</h1>
            </figure>
            <nav className="spacing"style={styles.spacing}>
              <Navbar />
            </nav>

    </header>

  );
}

export default Header;
