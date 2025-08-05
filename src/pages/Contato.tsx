import { useEffect } from "react";
import styles from "../componentes/Container/Container.module.css";
export default function Contato() {
    useEffect(() => {
    document.title = "Contato | Maraja Eventos";
  }, []);
  return (
    <div className={styles.contato} >

        <h2>Contato</h2>
        <p>Para fazer seu pedido ou tirar dúvidas, entre em contato com Bianca Marajá </p>
        <a href="tel:+5511910360111">📞 +55 11 91036-0111</a><br />
        <a href="mailto:bianca.maraja@email.com">📧 bianca.maraja@email.com</a>
        <a href="https://wa.me/5511910360111" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
    </div>
  )
}
