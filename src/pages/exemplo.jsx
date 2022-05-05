import Header from "../components/Header"
import Layout from '../components/Layout'

export default function Exemplo() {
    return (
        <Layout titulo='Trabalhando componentes (Header)'>
            <Header titulo='Next.js & React'/>
            <Header titulo='aprenda Next ná prática' />
            <h1>Exemplo</h1>
        </Layout>
    )
}