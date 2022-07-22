import { useContext } from 'react';

import { Navigate } from 'react-router-dom'; //Agora utilizamos Navigate para redirecionar a página para o local desejado.

import { AuthContext } from '../contexts/auth';



export default function RouteWrapper({ loggedComponent, defaultComponent, isPrivate}) {

      const { signed, loading } = useContext(AuthContext);



      if (loading) {
          return (
             <div>
                  <span>Carregando...</span>
             </div>

          )

     }



       if (signed && !isPrivate) {

              return <Navigate to='/dashboard' /> //direciona para página privada.

      } else if (!signed && isPrivate) {

              return <Navigate to='/' /> //direciona para página inicial.

      }



return signed ? loggedComponent : defaultComponent

}

