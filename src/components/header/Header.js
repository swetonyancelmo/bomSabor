import './header.css';

export default function Header() {

  return (
    <header>
      <h1 className='h1-header'>Pizzaria Bom Sabor</h1>
      
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Cardápio</a></li>
        <li><button><a href="#">Contato</a></button></li>
      </ul>
    </header>
  );
}