import React, {Component} from 'react';

class CompMenu extends Component{    
    render(){
        let productos ={
            lista : ['Promociones', 'platos','tablas','Jugos']
        };
        return(
            <React.Fragment>
                <h1>'Componente MENU'</h1>
                <h2>APOYO sub menu</h2> 
                <ol>
                {
                    productos.lista.map((lista, i) => {
                        return (
                            <li key={i} >
                                {lista}
                            </li>
                        )                
                    })
                }
                </ol>   
            </React.Fragment>
            
        );
    }
}

export default CompMenu;