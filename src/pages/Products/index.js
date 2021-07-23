import React from 'react';
import Navbar from '../../components/navbar';
import Menu from '../../components/menu';
import FormProducts from '../../components/products';
import Footer from '../../components/footer';

export default function ProductPage(){
    return (
        <React.Fragment>
            <Navbar />
            <div className="section has-background-white-ter">
                <div className="container is-fluid">
                    <div className="columns">
                        <Menu />
                        <FormProducts />
                    </div>
                </div>    
            </div>            
            <Footer />
        </React.Fragment>
    );
}