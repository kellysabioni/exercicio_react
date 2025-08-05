import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = " Home | Maraja Eventos";
  }, []);
  return (
    <div>

    <p> <strong>Maraja Eventos</strong> oferece serviços com foco nos nichos de moda, corporativo e feiras. <br />
    Para atender o seu projeto com êxito, é recomendado consultar a equipe para que eles possam entender melhor o seu evento.</p>
    
    <p>Disponibilizamos recursos como segurança, almoço, modelos, bombeiros, buffet, decoração, garçons, limpeza, logística, barman, estruturas e criativo.</p>
    </div>
  )
}
