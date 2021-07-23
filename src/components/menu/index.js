import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){

    return(

        <React.Fragment>
            
        <div className="column is-one-fifth ">
            
            <section className="hero is-small has-background-grey-dark">
                <div className="hero-body">
                    <p className="title has-text-white">
                    Cadastro de Produtos e Clientes 
                    </p>                                        
                </div>
            </section>
            
            <aside className="menu mt-5 p-5 has-background-white">

                <p className="menu-label">
                    Dashboard
                </p>
                <ul className="menu-list">
                    <li>
                        <Link to={'/dashboard'}>Indicadores</Link>
                    </li>                                        
                </ul>

                <p className="menu-label">
                    Inventário
                </p>
                <ul className="menu-list">
                    <li>
                    <Link to={'/cadastra-produto'}>Cadastrar Produto</Link>
                    </li>
                    {/* <li>
                    <Link to={'/lista-produtos'}>Lista de Produtos</Link>
                    </li>                                         */}
                </ul>
                
                <p className="menu-label">
                    Clientes
                </p>
                <ul className="menu-list">
                    <li>
                    <Link to={'/cadastra-cliente'}>Cadastrar Cliente</Link>
                    </li>
                    {/* <li>
                    <Link to={'/lista-clientes'}>Lista de Clientes</Link>
                    </li> */}
                </ul>
            </aside>
        </div>            
            
        </React.Fragment>        
    );
}