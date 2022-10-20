import React from 'react';
import Logo from '../image/logo_large.png'

const Footer= ()=> {
    return (
        <footer class="container-fluid p-3">
         <div class="container">
           <div class="row">
            <div class="col-md-6 col-xl-6">
                 <p>Tel. de Contacto: +543884042545</p>
                 <p>Todos los derechos Reservados 2022</p>
            </div>
             <div class="col-md-6 col-xl-6">
               <img src={Logo} alt="Diablo Vinos" width="64"/>
              </div>
           </div>
         </div>
        </footer>
    );

}

export default Footer;