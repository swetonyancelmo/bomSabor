import { useEffect, useState } from "react";
import "./inicio.css";
import pizzaImg1 from "../../assets/images/pizza.png";

export default function Inicio() {
  const fullText =
    "Tá com fome mas quer pagar pouco no valor? Chama a Bom Sabor!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 40); // velocidade da digitação (ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <img src={pizzaImg1} alt="Pizza deliciosa" />
      <div className="text-presention">
        <h1>{typedText}</h1>
        <p>
          Seja bem-vindo à experiência irresistível da Pizzaria Bom Sabor, o
          lugar onde a paixão pela pizza ganha vida! Aqui, tradição e
          criatividade se encontram para entregar muito mais do que uma refeição
          — entregamos momentos de felicidade. Desde a massa artesanal feita com
          todo cuidado, até os ingredientes sempre fresquinhos e selecionados,
          tudo é preparado pensando em você. Cada pizza que sai do nosso forno
          carrega o carinho da nossa equipe e o desejo de surpreender o seu
          paladar.
        </p>
        <a
          href="https://wa.me/81993082594?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Fale conosco no WhatsApp</button>
        </a>
      </div>
    </section>
  );
}
