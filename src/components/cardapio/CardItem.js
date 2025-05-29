import './cardItem.css';

export default function CardItem({img, nome, descricao, preco}) {
  return (
    <div className="card-cardapio">
      <img className="image-pizza1" src={img} alt={nome}  />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p><span className='price-decoration'>{preco}</span></p>
    </div>
  )
}