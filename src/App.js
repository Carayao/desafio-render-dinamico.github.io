import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BaseColaboradores } from "./Datos/BaseColaboradores.js";
import ListaColaboradores from "./Componentes/ListaColaboradores.jsx";
import Formulario from "./Componentes/Formulario.jsx";
import Header from './Componentes/Header.jsx';



function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [valorDeLaCaja, setValorDeLaCaja] = useState ('');

  return (
    <div className="App">
  
      <Header 
        setValorDeLaCaja={setValorDeLaCaja}>
      </Header>
     <div className='Espacio'>
      <Formulario
        lstColaboradores={lstColaboradores}
        setLstColaboradores={setLstColaboradores}>
      </Formulario>

      <ListaColaboradores
      valorDeLaCaja={valorDeLaCaja}
        lstColaboradores={lstColaboradores} >
      </ListaColaboradores>
      </div>
    </div>
  );
}

export default App;
