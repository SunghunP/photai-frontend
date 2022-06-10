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

function App() {
  const [ menu, setMenu ] = useState(null);
  const [ menuItemsByFoodType, setMenuItemsByFoodType] = useState(null);

  const MENU_URL = `https://pho-tai.herokuapp.com/menu/`

  async function getMenu() {
    try {
      const data = await fetch(MENU_URL).then(res => res.json());
      setMenu(data);
    } catch (err) {
      console.log(err);
    };
  };

  async function getMenuItemsByFoodType(foodType) {
    try {
      const data = await fetch(MENU_URL + 'foodtype/' + foodType).then(res => res.json());
      setMenuItemsByFoodType(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="App">
      <Header woodbg={woodbg} />
      <Routes>
        <Route 
          path="/" 
          element={<Home menu={menu}/>} 
        />
        <Route 
          path="/menu" 
          element={<Menu 
            menu={menu}  
            getMenuItemsByFoodType={getMenuItemsByFoodType}
            menuItemsByFoodType={menuItemsByFoodType}
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
