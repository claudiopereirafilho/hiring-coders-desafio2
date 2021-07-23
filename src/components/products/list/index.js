import React,{useEffect, useState} from 'react';

export default function ListProducts(props){
    

    const[products, setProducts] = useState([]);
    let itensList = [];

    // window.addEventListener('storage',()=>{
    //     localStorage.getItem('inventoryProduct') ?
    //         setProducts(JSON.parse(localStorage.getItem('inventoryProduct'))):
    //         setProducts([]);
    // });
    
    useEffect(() => {

        // localStorage.getItem('inventoryProduct') ?
        //     setProducts(JSON.parse(localStorage.getItem('inventoryProduct'))):
        //     setProducts([]);
        setProducts(props.storage);
        
    },[props]);

    itensList = products;
    // if (products !== ''){
    //     itensList = products.map((item)=>{
    //         return{
    //             ref: item.ref,
    //             product: item.product,
    //             descProduct: item.descProduct,
    //             sizing: item.sizing,
    //             amount: item.amount
    //         }
    //     });
    // }

    return (
        <React.Fragment>

            <div className="column is-two-fifths">

                <section className="hero is-small has-background-primary">
                    <div className="hero-body">
                        <p className="title has-text-white">
                        Lista de Produtos
                        </p>                    
                    </div>
                </section>

                <div className="box mt-5">

                    
                    
                    <div className="table-container">
                        {  itensList.length > 0 ? 
                            
                        
                            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mb-5">
                                <thead>
                                    <tr>
                                        <th>Referência</th>
                                        <th>Produto</th>
                                        <th>Descrição</th>
                                        <th>Medida</th>
                                        <th>Quantidade</th>                                                                
                                    </tr>
                                </thead>                                
                                <tbody>
                                {   
                                    itensList.map((product) =>{
                                            return(
                                                <tr>
                                                    <td>{product.ref}</td>
                                                    <td>{product.product}</td>
                                                    <td>{product.descProduct}</td>
                                                    <td>{product.sizing}</td>
                                                    <td>{product.amount}</td>                                                    
                                                </tr>
                                            )}
                                    )
                                }
                                    
                                </tbody>
                            </table>
                        : <p>Nenhum produto cadastrado!</p>
                        }    
                        </div>
                </div>


            </div>
        </React.Fragment>    
    );
}