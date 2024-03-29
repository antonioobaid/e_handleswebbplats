import { Outlet } from "react-router-dom"

function Publiclayout() {

  return (
    <div className="homepage" >      
          <Outlet/>   
    </div>  
  )
}
export default Publiclayout