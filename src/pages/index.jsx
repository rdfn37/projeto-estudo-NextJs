import Link from "next/link";
import NavLink from "../components/NavLink";

export default function Home() {
  return (
    <div className="container">
      <ul>
        <li>
          <NavLink link='/estiloso' pageName='Estiloso' />
        </li>
        <li>
          <NavLink link='/exemplo' pageName='Exemplo' />
        </li>
        <li>
          <NavLink link='/test' pageName='Test' />
        </li>
        <li>
          <NavLink link='/navegacao' pageName='Exemplo Navegação #1' />
        </li>
        <li>
          <NavLink link='/cliente/rj/123' pageName='Exemplo Navegação #2' />
        </li>
        <li>
          <NavLink link='/estado' pageName='Trabalhando Com Estado' />
        </li>
      </ul>
    </div>
  );
}
