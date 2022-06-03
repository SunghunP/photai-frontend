import './App.css';
// Import components 
import Header from './components/Header';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Edit from './pages/Edit';


function App() {
  const [ menu, setMenu ] = useState(null);
  const MENU_URL = `https://pho-tai.herokuapp.com/menu`

  async function getMenu() {
    try {
      const data = await fetch(MENU_URL)
        .then((response) => response.json());
      setMenu(menu);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
            menu={menu} 
            setMenu={setMenu}
            getMenu={getMenu}/>
          } 
        />
        <Route path="/menu" element={<Menu menu={menu}/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/edit" element={<Edit setMenu={setMenu}/>}/>
      </Routes>
    </div>
  );
}

export default App;
