import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './Carrinho'
import FavoritosSlice from './Favoritos'
import produtosApi from '../services/api'

export const store = configureStore({
  reducer: {
    Carrinho: CarrinhoReducer,
    Favoritos: FavoritosSlice,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
