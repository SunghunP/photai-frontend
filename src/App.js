// Import components 
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Edit from './pages/Edit';
import woodbg from './images/woodbg.png';
import mainBgBamboo from './images/mainBgBamboo.png'
import placeholder from './images/placeholder.jpg'
function App() {
  const [ menu, setMenu ] = useState(null);

  const MENU_URL = `https://pho-tai.herokuapp.com/menu/`

  async function getMenu() {
    try {
      const data = await fetch(MENU_URL).then(res => res.json());
      setMenu(data);
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="App">
      <Header woodbg={woodbg} />
      <Routes>
        <Route 
          path="/" 
          element={<Home menu={menu} mainBgBamboo={mainBgBamboo} placeholder={placeholder} />} 
        />
        <Route 
          path="/menu" 
          element={<Menu 
            menu={menu}  
          />} 
        />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/edit" element={<Edit setMenu={setMenu}/>}/>
      </Routes>
    </div>
  );
}

export default App;
