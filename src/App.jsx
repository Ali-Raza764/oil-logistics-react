import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, AllProducts, ProductDetails, About } from './pages'
import { Footer, Navbar } from './components'

function App() {
  const routes = [
    {path:'/', element:<Home />},
    {path:'/login', element:<Login />},
    {path:'/allproducts', element:<AllProducts />},
    {path:'/productdetails/:name', element:<ProductDetails />},
    {path:'/about', element:<About />},
  ]

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {
          routes.map((route)=>(
            <Route path={route.path} element={route.element}/>
          ))
        }
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
