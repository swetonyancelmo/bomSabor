import './header.css';

export default function Header() {

  return (
    <header>
      <h1 className='h1-header'>Pizzaria Bom Sabor</h1>
      
      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#cardapio">Cardápio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </header>
  );
}