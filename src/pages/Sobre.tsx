import { useEffect } from "react";

export default function Sobre() {
    useEffect(() => {
    document.title = "Sobre | Meu App React";
  }, []);
  return (
    <div>
      <h2>Nossa Missão</h2>
      <p>A missão com o cliente é oferecer soluções, tornando o projeto possível e auxiliando desde a parte criativa até a resolução. Como empresa, a missão é construir uma equipe estruturada e pronta para realizar sonhos.</p>

      <p>Bianca Marajá, com mais de 10 anos de experiência no ramo da moda, fundou a agência para criar eventos e serviços individuais para empresas e varejo. A empresa se destaca pela criatividade e enxerga cada evento como uma história a ser contada.</p>
      
    </div>
  )
}
