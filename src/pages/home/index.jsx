import { useRef, useState } from 'react'
import { v4 } from 'uuid'

//estilos
import { AddButton, Container, Product, DeleteButton } from './styles'

function Home() {

  const inputProd = useRef()
  const [products, setProducts] = useState([])//o estado é usado quando quero que o item da variaval apareça em tempo real na tela, mantendo os valores anteriores através dos ...

  function AddProductButtom() {
    setProducts([{ id: v4(), name: inputProd.current.value }, ...products])
    inputProd.current.value = ''
  }

  function DeleteProduct(id) {
    setProducts(products.filter(products => products.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputProd} />
      <AddButton onClick={AddProductButtom}>Adicionar</AddButton>

      {products.map((products) => (
        <Product key={products.id}>
          <p>{products.name}</p>
          <DeleteButton onClick={() => DeleteProduct(products.id)}>🗑️</DeleteButton>
        </Product>
      ))}

    </Container>
  )
}

export default Home

//parei no 1:05:00
