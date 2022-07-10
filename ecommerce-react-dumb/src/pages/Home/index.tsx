import { useEffect, useState } from "react"
import { useCart } from "../../contexts/CartContext";
import { IProduct } from "../../types/IProduct";
import { Card } from "./components/Card";

export const Home = () => {
  const [products, setProducts] = useState([] as IProduct[])
  const {state} = useCart()

  console.log(state)

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (await fetch('http://localhost:3000/products')).json()
      setProducts(data) 
    }

    fetchProducts()
  },[])

  return (
    <main className='mx-36'>
      <h1 className='text-2xl'>Nossos cafés</h1>
      <div className='grid grid-cols-3 gap-8 mt-10'>
      {products.map((product) => (
        <Card key={product.id} product={product}/>
      ))}
      </div>
    </main>
  )
}