import './Estilos/App.css';
import AgregarTarea from './Componentes/AgregarTarea';



function App() {
  return (
    <div className="aplicacion-tarea">
      <div className='lista-tarea'>
        <h1>¿Plan para hoy?</h1>
        <AgregarTarea />
      </div>
    </div>
  );
}

export default App;
