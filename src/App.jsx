import { RouterProvider } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import { routes } from "./routes"
import Provider from "./context/Provider"



function App() {
 

  return (
    <Provider>
    <>
    <RouterProvider router={routes} />
    </>
    </Provider>
  )
}

export default App
