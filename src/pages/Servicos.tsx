import { useEffect } from "react";


export default function Servicos() {
    useEffect(() => {
    document.title = "Serviços | Maraja Eventos";
  }, []);
  return (
    <div>
        <h2>Nossos Serviços </h2>
        <p>A <strong>Maraja Eventos</strong> disponibiliza recursos como</p>

        <ul>
            <li>Segurança</li>
            <li>Bombeiro</li>
            <li>Garçom</li>
            <li>Barman</li>
            <li>Almoço</li>
            <li>Buffet</li>
            <li>Limpeza</li>
            <li>Estruturas</li>
            <li>Modelo</li>
            <li>Decoração</li>
            <li>Logistica</li>
            <li>Criativo</li>
        </ul>
    </div>
  )
}
