import { Routes, Route } from 'react-router-dom'

function RegularRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
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
    );
}

export default RegularRoutes;