import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Catalog from './Pages/Catalog/Catalog';
import Main from './Pages/Main/Main';
import Calculator from './Pages/Calculator/Calculator';


function App() {
  function Layout(){
    return(
        <div className="App">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
  }
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='' element={<Main/>} />
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Route>

      </Routes>
  );
}

export default App;
