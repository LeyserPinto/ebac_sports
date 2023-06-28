import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoType = {
  produtos: Produto[]
}

const initialState: CarrinhoType = {
  produtos: []
}

const CarrinhoSlice = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    adicionarItens: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.produtos.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.produtos.push(produto)
      }
    }
  }
})

export const { adicionarItens } = CarrinhoSlice.actions

export default CarrinhoSlice.reducer
