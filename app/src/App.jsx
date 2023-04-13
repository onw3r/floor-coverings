import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Catalog from './Pages/Catalog';

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
          <Route index path='' element={<Catalog/>}/>
        </Route>
      </Routes>
  );
}

export default App;
