import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";

export default function Estiloso() {
  return (
    <Layout titulo='Usando CSS modularizado'>
      <div className={styles.styledDiv}>
        <h1>Estiloso</h1>
        <h2>Utilizando css modularizados</h2>
      </div>
    </Layout>
  );
}
