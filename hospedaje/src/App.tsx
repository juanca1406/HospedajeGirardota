import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './AppBar/Menu';
import Ajustes from './AppBar/Ajustes/Ajustes';
import ConfirmationDialog from './AppBar/Calendario/AddReserva';
import Tarifas from './AppBar/Tarifas/Tarifas';
import { NumeroNocheProvider } from './AppBar/Calendario/CalendarioFechas/NumeroNocheContext';
import AddRom from './AppBar/AddHabitacion/AddRom'

function Translations() {
  return (
    <div>
      <Menu />
      <ConfirmationDialog />
    </div>
  );
}

function App() {
  return (
    <NumeroNocheProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Translations />} />
            <Route path="/Settings" element={<Ajustes />} />
            <Route path="/AddRom" element={<AddRom />} />
            <Route path="/Tarifas" element={<Tarifas />} />
          </Routes>
        </div>
      </Router>
    </NumeroNocheProvider>
  );
}

export default App;
