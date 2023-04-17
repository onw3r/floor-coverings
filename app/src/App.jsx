import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Catalog from './Pages/Catalog/Catalog';
import Main from './Pages/Main/Main';
import Item from './Pages/Item/Item';
import Footer from './Components/Footer/Footer';



function App() {
  function Layout(){
    return(
        <div className="App">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
  }
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='' element={<Main/>} />
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path="/catalog/:id" element={<Item/>}/>
        </Route>

      </Routes>
  );
}

export default App;
