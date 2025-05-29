import './cardapio.css';
import CardItem from './CardItem';
import PizzaPeperoni from '../../assets/images/pepperoni.png';
import FrangoComQueijo from '../../assets/images/frango-com-queijo.png';
import PizzaChocolate from '../../assets/images/chocolate.png';
import PizzaMussarela from '../../assets/images/mussarela.png';


export default function Cardapio() {
  return (
    <section id='cardapio' className='section-cardapio'>
      <h1 className='title-cardapio'>Cardápio</h1>

      <div className="sect-cards">
        <div className='cardapios' data-aos="fade-right">
          <CardItem
            img={PizzaPeperoni}
            nome="Pizza de Peperoni"
            descricao="Peperoni e massa recheada com cheddar"
            preco="R$50,00"
          />
        </div>
        <div className='cardapios' data-aos="fade-right">
          <CardItem
            img={FrangoComQueijo}
            nome="Pizza Frango com Queijo"
            descricao="Frango, queijo mussarela, catupiry e cheddar"
            preco="R$40,00"
          />
        </div>
        <div className='cardapios' data-aos="fade-left">
          <CardItem
            img={PizzaChocolate}
            nome="Pizza de Chocolate"
            descricao="Nutella, M&M, leite condensado"
            preco="R$80,00"
          />
        </div>
        <div className='cardapios' data-aos="fade-left">
          <CardItem
            img={PizzaMussarela}
            nome="Pizza de Mussarela"
            descricao="Queijo Mussarela, catupiry e cheddar"
            preco="R$50,00"
          />
        </div>
      </div>
      
    </section>
  )
}