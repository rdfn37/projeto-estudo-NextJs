import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Layout from "../components/Layout";

export default function Integracao() {
  const [user, setUser] = useState({});
  const [codigo, setCodigo] = useState(1);

  const inputUserId = useRef('');

  function getUser(codigo) {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }

  function getCodigo() {
    setCodigo(inputUserId.current.value);
  }

  useEffect(() => {
    getUser(codigo);
  }, [codigo]);

  return (
    <Layout titulo="Integração API">
      <div>
        <div>
          <input type="text" ref={inputUserId} />
          <button onClick={getCodigo}>Obter Usuário</button>
        </div>
        <h2>
          Usuário: {user.nome} - ID: {user.id}
        </h2>
        <p>E-mail: {user.email}</p>
      </div>
    </Layout>
  );
}
