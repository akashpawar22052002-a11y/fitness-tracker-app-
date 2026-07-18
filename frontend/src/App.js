import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components (इथे आपण फाईल्स 'Import' करत आहोत)
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar प्रत्येक पेजवर दिसेल */}
        <Navbar />
        
        <div className="pages">
          <Routes>
            {/* जेव्हा path "/" असेल तेव्हा 'Home' कॉम्पोनंट दिसेल */}
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;