import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

const ClientePorCodigo = () => {
    const router = useRouter()
    console.log(router.query)
    return(
        <Layout titulo='Exemplo Navegação Dinâmica'>
            <span>Código: {router.query.codigo} - {router.query.filial}</span>
        </Layout>
    )
}

export default ClientePorCodigo