import division, { FECHA, menNames, MES, names, user } from "./export-ejemplos";
import textopordefecto from "./export-ejemplos";

function ImportExportApp() {
  return <div className="App">
    <h1>Componente ImportExportApp</h1>
    <p>Estamos en el año {FECHA}</p>
    <p>Estamos en el mes {MES}</p>
    <p>Por defecto: {textopordefecto}</p>

    <hr></hr>
    <h3>Array Chicas</h3>
    <p>Nombre 1: {names[0]}</p>
    <p>Nombre 2: {names[1]}</p>
    <p>Nombre 3: {names[2]}</p>

    <hr></hr>
    <h3>Array Chicos</h3>
    <p>Chico 1: {menNames[0]}</p>
    <p>Chico 2: {menNames[1]}</p>
    <p>Chico 3: {menNames[2]}</p>

    <hr></hr>
    <h3>División</h3>
    <p>Resultado división: {division(4, 2)}</p>

    <hr></hr>
    <h3>Objeto User</h3>
    <p>Nombre: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Password: {user.password}</p>

  </div>;
}

export default ImportExportApp;
