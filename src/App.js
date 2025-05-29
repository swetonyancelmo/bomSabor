import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import Cardapio from './components/cardapio/Cardapio';
import Contatos from './components/contatos/Contatos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="App">
      <Header />
      <Inicio />
      <Cardapio />
      <Contatos />
      <p className='direitos'>© Desenvolvido por Swetony Ancelmo</p>
    </div>
  );
}

export default App;
