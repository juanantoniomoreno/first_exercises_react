/* -----------01- import-export--------- */
//import ImportExportApp from "./01-import-export/ImportExportApp";

/* --------- 02-class Component -------- */
/* import CompdeClase from './02_ClassComponent/CompClass'; */

/* --------- 03-Componente Funcional -------- */
/* import { CompPadre } from './03_Functional_Component/explicacion/CompPadre'; */

/* --------- 04-Ejercicio Bandas ---------- */
import { CompBandas } from "./04_Ejercicio_bandas/CompBandas";

/* --------- 05-Ejercicio Simpons ---- */
/* import { Simpsons } from './05_Ejercicio_Simpsons/Simpsons'; */

/* --------- 06-Ejercicio Reproductor ---- */
import { Reproductor  } from './06_Reproductor/Reproductor';



import './App.css'

function App() {
  
  return (
    <div className="App">
      {/* 01- clase import-export */}      
      {/* <ImportExportApp/> */} 

      {/* 02- Componente de clase */}  
      {/* <CompdeClase/>  */}
 
      {/* 03- Componente Funcional */}  
      {/* <CompPadre/> */} 

     {/* Ejercicio - Bandas  */}
     <CompBandas/>

     {/* Ejercicio - Simpsons */}
     {/* <Simpsons/> */}

     {/* Ejercicio - Reproductor */}
     <Reproductor/>



    </div>
  );
}

export default App;
