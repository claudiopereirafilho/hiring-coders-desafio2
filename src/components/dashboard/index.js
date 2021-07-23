import React, {useEffect, useState} from 'react';


function Dashboard(){

    const [storageClients, setStorageClients] = useState([]);
    const [storageProducts, setStorageProducts] = useState([]);

    function HandlePanel(param){

    }

    window.addEventListener("storage", (e) => {
        
        localStorage.getItem('clientData') ? 
            setStorageClients(JSON.parse(localStorage.getItem('clientData'))) : 
            setStorageClients([]);

            localStorage.getItem('inventoryProduct') ? 
            setStorageProducts(JSON.parse(localStorage.getItem('inventoryProduct'))) : 
            setStorageProducts([]);

    });

    useEffect(()=>{
            
            localStorage.getItem('clientData') ? 
            setStorageClients(JSON.parse(localStorage.getItem('clientData'))) : 
            setStorageClients([]);

            localStorage.getItem('inventoryProduct') ? 
            setStorageProducts(JSON.parse(localStorage.getItem('inventoryProduct'))) : 
            setStorageProducts([]);        
            
    },[])

    return(
        <React.Fragment>

            <div className="container p-3">

                            
                <section className="hero is-small has-background-grey-dark">
                <div className="hero-body">
                    <p className="title has-text-white">
                    Dashboard
                    </p>                    
                </div>
                </section>

                <div className="columns p-6">
                    
                    <div className="column">
                        
                        <div className="card">
                            <div className="card-content has-background-primary">
                                <p className="title has-text-white">
                                {
                                    storageProducts.length                                    
                                }
                                </p>
                                <p className="subtitle has-text-white">
                                Produto(s) cadastrado(s)
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="column">
                        
                        <div className="card">
                            <div className="card-content has-background-info">
                                <p className="title has-text-white">
                                {
                                    storageClients.length
                                }
                                </p>
                                <p className="subtitle has-text-white">
                                Cliente(s) cadastrado(s)
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>                
            </div>
        </React.Fragment>
    );
}
export default Dashboard;