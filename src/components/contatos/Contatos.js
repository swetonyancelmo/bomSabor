import './contatos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Contatos(){
  return (
    <div id='contato' className='contatos-section'>
      <h1>Fale Conosco</h1>

      <div className='div-links'>
        <a
          href="https://wa.me/81999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
          target="_blank"
          rel="noopener noreferrer"
        ><button className='btn-whatsapp' data-aos="fade-up"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</button></a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        ><button className='btn-instagram' data-aos="fade-up"><FontAwesomeIcon icon={faInstagram} /> Instagram</button></a>
      </div>

      <p data-aos="fade-up">📍 Endereço: Rua da Alegria, 70 - Auto de São Sebastião</p>
      <p data-aos="fade-up">🕒 Horário de Funcionamento: Segunda a Domingo, 17h até às 23h</p>
    </div>
  )
}