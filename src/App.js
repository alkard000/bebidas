import React from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';
import AlcoholContext from './context/AlcoholContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <AlcoholContext>
            <Header/>

            <div className="container mt-5">
              <div className="row">
                <Formulario/>
              </div>
              <ListaRecetas/>
            </div>
            
          </AlcoholContext>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
    
  );
}

export default App;
