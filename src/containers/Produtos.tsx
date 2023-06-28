import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2>Carregando....</h2>
  return (
    <>
      <S.Produtos>
        {data?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
