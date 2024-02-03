import { Outlet } from "react-router-dom"
import AuthContextProvider from "../Context/authcontext"
import CartContextProvider from "../context/CardContext"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

function Rootlayout() {
   
   return (
    <div>
       <AuthContextProvider>
         <CartContextProvider>
            <Header/>
               <Outlet/>
              <Footer/> 
          </CartContextProvider>
       </AuthContextProvider>    
    </div>
   )
}
export default Rootlayout