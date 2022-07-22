import { Routes, Route } from "react-router-dom"; // Não utilizamos Switch, mas sim Routes.
import RouteWrapper from "./Route"; //Aqui se encontra o código acima.

import SignIn from '../pages/SignIn'; // Página de login.
import SignUp from '../pages/SignUp'; // Página de cadastro.

import Dashboard from '../pages/Dashboard'; // Página privada.
import Profile from '../pages/Profile'; // Página de perfil
import Customers from "../pages/Customers"; // Página de Clientes
import New from '../pages/New' // Página Novo Chamado



export default function AllRoutes() {

    return (
         <Routes>
                 <Route path='/' element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SignIn />}/>} />
                 <Route path='/register' element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SignUp />} />} />

                 <Route path='/dashboard' element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SignIn />} isPrivate />}/>
                 <Route path='/profile' element={<RouteWrapper loggedComponent={<Profile />} defaultComponent={<SignIn />} isPrivate />}/>
                 <Route path='/customers' element={<RouteWrapper loggedComponent={<Customers />} defaultComponent={<SignIn />} isPrivate />}/>
                 <Route path='/new' element={<RouteWrapper loggedComponent={<New />} defaultComponent={<SignIn />} isPrivate />}/>
                 <Route path='/new/:id' element={<RouteWrapper loggedComponent={<New />} defaultComponent={<SignIn />} isPrivate />}/>
                
                 
         </Routes>
    )
}