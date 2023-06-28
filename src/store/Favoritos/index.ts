import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosType = {
  favoritos: Produto[]
}

const initialState: FavoritosType = {
  favoritos: []
}

const FavoritosSlice = createSlice({
  name: 'Favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (p) => p.id !== produto.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = FavoritosSlice.actions
export default FavoritosSlice.reducer
