import './App.css';
import imagen1 from './imagenes/imagen1.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {
  const [numClics,setNumClics]= useState(0);
  const mas1 = ()=>{
      setNumClics(numClics+1);
  };
  const menos1 = ()=>{
    setNumClics(numClics-1);
  };
  const mas10 = ()=>{
    setNumClics(numClics+10);
};
const menos10 = ()=>{
  setNumClics(numClics-10);
};
  const reiniciarContador = ()=>{
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={imagen1}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics={ numClics }
        />
        <div>
          <Boton
            texto='+1'
            esBotonDeClic={true}
            gestionClick={mas1}/>
           <Boton
            texto='-1'
            esBotonDeClic={true}
            gestionClick={menos1}/>
        </div>
        <div>
            <Boton
            texto='+10'
            esBotonDeClic={true}
            gestionClick={mas10}/>
             <Boton
            texto='-10'
            esBotonDeClic={true}
            gestionClick={menos10}/>
        </div>
        <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            gestionClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
