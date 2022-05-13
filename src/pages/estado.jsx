import Layout from "../components/Layout";
import { useState } from "react";

const Estado = () => {
  const [number, setNumber] = useState(0); //React Hooks

  function plusOne() {
    console.log("vai curintias");
    setNumber(++number);
  }

  return (
    <Layout titulo="Trabalhando Com Estado">
      <span>{number}</span>
      <button onClick={plusOne}>Incrementar</button>
    </Layout>
  );
};

export default Estado;
