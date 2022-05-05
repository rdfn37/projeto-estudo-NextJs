import Link from "next/dist/client/link";
import styles from "../styles/Layout.module.css";
import Header from '../components/Header'

const Layout = (props) => {
  console.log(props);
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <Header titulo={props.titulo ?? 'Placeholder de título'} />
        <Link href={"/"}>Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
