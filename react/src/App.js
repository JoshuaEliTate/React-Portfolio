
import StickyFooter from "./components/footer";
import Header from "./components/Header";
import HomePage from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return(
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
                path="/portfolio"
                element={<Portfolio />}
            />
            <Route
                path="/contact" 
                element={<Contact />} 
            />
            <Route 
                path="/resume" 
                element={<Resume />} 
            />
            </Routes>
          </div>
          <StickyFooter />
        </div>
      </Router>
);;

  };


export default App;



