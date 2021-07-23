import React, { useState, useEffect } from 'react';
import ListProducts from './list';

const arrDados = [];
let newArr = [];

function FormProducts(){

    const [display, setDisplay] = useState('none');
    const [codRef, setCodRef] = useState('');
    const [product, setProduct] = useState('');
    const [descProduct, setDescProduct] = useState('');
    const [sizing, setSizing] = useState('');
    const [amount, setAmount] = useState('');
    const [storageProducts, setStorageProducts] = useState([]);

    useEffect(()=>{
    
        localStorage.getItem('inventoryProduct') ? 
            setStorageProducts(JSON.parse(localStorage.getItem('inventoryProduct'))) :
            setStorageProducts([]);
        
    },[]);


    function HandleDisplayMessage(param){
        setDisplay(param);
        console.log(display);
    }

    return(
        <React.Fragment>

            <div className="column is-two-fifths">

                <section class="hero is-small has-background-primary">
                    <div class="hero-body">
                        <p class="title has-text-white">
                        Cadastro de Produto
                        </p>                    
                    </div>
                </section>

                <div class="notification is-danger mt-5" style={{display:`${display}`}}>
                    <button className="delete"
                        onClick={()=>{
                            HandleDisplayMessage('none');
                        }}
                    ></button>
                    <strong>Atenção!</strong> <br />
                    Para seguir com o cadastro, todos os campos devem ser preenchidos.
                </div>


                <form className="p-6 has-background-white mt-5" 
                onSubmit={(e)=>{
                        
                    e.preventDefault();
                        
                        const dadosDoForm = new FormData(e.target);
                        
                        const inputRef = dadosDoForm.get('inCodRef');
                        const inputProduct = dadosDoForm.get('inProduct');
                        const inputDescProduct = dadosDoForm.get('inDescProduct');
                        const inputSizing = dadosDoForm.get('inSizing');
                        const inputAmount = dadosDoForm.get('inAmount');
                        
                        if (inputRef !== '' &&
                            inputProduct !== '' &&
                            inputDescProduct !== '' &&
                            inputSizing !== '' &&
                            inputAmount !== '') {
                        
                                const arrInputForm = {
                                    ref: inputRef,
                                    product: inputProduct,
                                    descProduct:inputDescProduct,
                                    sizing:inputSizing,
                                    amount:inputAmount
                                };
                                                        
                                arrDados.push(arrInputForm);
                                newArr = arrDados;        
                                
                                if (localStorage.getItem('inventoryProduct')) {
                                    const listStorage = JSON.parse(localStorage.getItem('inventoryProduct'));
                                    
                                    if (listStorage !== '') {                                
                                        newArr = [...listStorage, arrInputForm];                                
                                    }
                                }

                                const arrList = newArr.map((item)=>{
                                    return{
                                        ref: item.ref,
                                        product: item.product,
                                        descProduct: item.descProduct,
                                        sizing: item.sizing,
                                        amount: item.amount
                                    }}
                                )
                                
                                localStorage.setItem('inventoryProduct',JSON.stringify(arrList));

                                localStorage.getItem('inventoryProduct') ? 
                                setStorageProducts(JSON.parse(localStorage.getItem('inventoryProduct'))) :
                                setStorageProducts([]);

                                setCodRef('');
                                setProduct('');
                                setDescProduct('');
                                setSizing('');
                                setAmount('');

                                setDisplay('none');
                        
                        }else{                                
                            setDisplay('block');
                        }

                    }}>

                    <h2 className="subtitle">Dados do produto</h2>

                    <div className="field">
                        <label className="label">Código de referência</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Código" 
                                name="inCodRef"
                                value={codRef}
                                onChange={((e) => setCodRef(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label className="label">Nome do produto</label>
                            <input className="input" type="text" placeholder="Nome" 
                                name="inProduct"
                                value={product}
                                onChange={((e) => setProduct(e.target.value))}
                            />
                        </p>
                    </div>

                    <div className="field">
                        <label className="label">Descrição do produto</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea" 
                                name="inDescProduct"
                                value={descProduct}
                                onChange={((e) => setDescProduct(e.target.value))}
                            ></textarea>
                        </div>
                    </div>

                        <div className="field">
                        
                            <div className="contol">
                                <label className="label">Medida</label>
                                <div className="select">
                                
                                    <select name="inSizing" value={sizing} onChange={
                                            (e) => setSizing(e.target.value)
                                        }>
                                        <option 
                                        key="inSizing"
                                        value="Quilo">Quilo</option>
                                        <option 
                                        name="inSizing"
                                        value='Grama'>Grama</option>
                                        <option 
                                        name="inSizing"
                                        value='Miligrama'>Miligrama</option>
                                        <option 
                                        name="inSizing"
                                        value='Litro'
                                        >Litro</option>
                                        <option 
                                        name="inSizing"
                                        value='Mililitro'
                                        >Mililitro</option>
                                        <option 
                                        name="inSizing"
                                        value='Metro'
                                        >Metro</option>
                                        <option 
                                        name="inSizing"
                                        value='Centímetro'
                                        >Centímetro</option>
                                        <option 
                                        name="inSizing"
                                        value='Caixa'
                                        >Caixa</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <label className="label">Quantidade</label>
                                <input className="input" type="text" placeholder="Quantidade" 
                                    name="inAmount"
                                    value={amount}
                                    onChange={((e) => setAmount(e.target.value))}
                                />
                            </p>
                        </div>    
                        
                    <div className="field is-grouped is-grouped-right mt-5">
                        <p className="control">
                            <button type="submit" className="button is-primary">
                            Cadastrar
                            </button>
                        </p>
                    </div>

                </form>

            </div>           

            <ListProducts storage={storageProducts}/> 

        </React.Fragment>
    );
}
export default FormProducts;