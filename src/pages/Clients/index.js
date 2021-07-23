import React from 'react';
import Navbar from '../../components/navbar';
import Menu from '../../components/menu';
import FormPeople from '../../components/client';
import Footer from '../../components/footer';

export default function ClientPage(){
    return (
        <React.Fragment>
            <Navbar />
            <div className="section has-background-white-ter is-fullheight-100vh">
                <div className="container is-fluid">
                    <div className="columns">
                        <Menu />
                        <FormPeople />
                    </div>
                </div>    
            </div>              
            <Footer />
        </React.Fragment>
    );
}