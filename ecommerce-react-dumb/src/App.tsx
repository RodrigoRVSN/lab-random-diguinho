import { Header } from "./components/Header"
import { CartProvider } from "./contexts/CartContext"
import { Router } from "./routes"

function App() {
  return (
    <CartProvider>
      <Header />
      <Router />
    </CartProvider>
  )
}

export default App
