import "./BannersMarcas.css";

import Samsung from "../../assets/marcas/samsung.png";
import Apple from "../../assets/marcas/apple.png";
import Sony from "../../assets/marcas/sony.png";

export default function BannerMarcas() {
  return (
    <section className="banner-marcas">

      <div className="banner-esquerda">

        <span className="banner-tag">
          AS MELHORES MARCAS
        </span>

        <h1>
          Tecnologia que conecta
          <span> o futuro</span>
        </h1>

        <p>
          Encontre os melhores produtos das principais
          marcas do mercado em um só lugar.
        </p>

        <div className="banner-beneficios">

          <div>
            <h3>✓ Qualidade Garantida</h3>
            <span>Produtos originais</span>
          </div>

          <div>
            <h3>✓ Melhores Preços</h3>
            <span>Ofertas exclusivas</span>
          </div>

          <div>
            <h3>✓ Suporte Especializado</h3>
            <span>Atendimento dedicado</span>
          </div>

        </div>

        <button className="banner-btn">
          Ver todos os produtos
        </button>

      </div>


      <div className="banner-direita">

        <div className="circulo"></div>

        <div className="logo-card">
          <img src={Samsung} alt="" />
        </div>

        <div className="logo-card">
          <img src={Apple} alt="" />
        </div>

        <div className="logo-card">
          <img src={Sony} alt="" />
        </div>

      </div>

    </section>
  );
}