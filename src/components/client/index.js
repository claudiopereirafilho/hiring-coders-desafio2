import React,{useState, useEffect} from 'react';
import ListClients from '../client/list';

const arrDados = [];
let newArr = [];

function FormPeople(){

    const [display, setDisplay] = useState('none');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    const [clients, setClients] = useState([]);

    useEffect(()=>{
    
        localStorage.getItem('clientData') ? 
            setClients(JSON.parse(localStorage.getItem('clientData'))) :
            setClients([]);
        
    },[]);

    function HandleDisplayMessage(param){
        setDisplay(param);
        console.log(display);
    }

    return(
        <React.Fragment>

            
            <div className="column is-two-fifths">

                
                <section className="hero is-small has-background-link">
                <div className="hero-body">
                    <p className="title has-text-white">
                    Cadastro de cliente
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
                            const inputNome = dadosDoForm.get('inNome');
                            const inputEmail = dadosDoForm.get('inEmail');
                            const inputContato = dadosDoForm.get('inContato');
                            const inputCep = dadosDoForm.get('inCep');
                            const inputEstado = dadosDoForm.get('inEstado');
                            const inputEndereco = dadosDoForm.get('inEndereco');
                            const inputNumero = dadosDoForm.get('inNumero');
                            const inputComplemento = dadosDoForm.get('inComplemento');
                            const inputBairro = dadosDoForm.get('inBairro');
                            const inputCidade = dadosDoForm.get('inCidade');
                            
                            if (inputNome !== '' &&
                            inputEmail !== '' &&
                            inputContato !== '' &&
                            inputCep !== '' &&
                            inputEstado !== '' &&
                            inputEndereco !== '' &&
                            inputNumero !== '' &&
                            inputComplemento !== '' &&
                            inputBairro !== '' &&
                            inputCidade !== '') {
    
                                    const arrInputForm = {
                                        id:Math.floor(Math.random() * 101) +1,
                                        nome: inputNome,
                                        email: inputEmail,
                                        contato:inputContato,
                                        cep:inputCep,
                                        estado: inputEstado,
                                        endereco: inputEndereco,
                                        numero: inputNumero,
                                        complemento: inputComplemento,
                                        bairro: inputBairro,
                                        cidade: inputCidade
                                    };
            
                                    arrDados.push(arrInputForm);
                                    newArr = arrDados;        
                                    
                                    if (localStorage.getItem('clientData')) {
                                        const listStorage = JSON.parse(localStorage.getItem('clientData'));
                                                                        
                                        if (listStorage !== '') {                                
                                            newArr = [...listStorage, arrInputForm];
                                        }
                                    }

                                    const arrList = newArr.map((item)=>{
                                        return{
                                            id: item.id,
                                            nome: item.nome,
                                            email: item.email,
                                            contato: item.contato,
                                            cep: item.cep,
                                            estado: item.estado,
                                            endereco:item.endereco,
                                            numero:item.numero,
                                            complemento: item.complemento,
                                            bairro:item.bairro,
                                            cidade:item.cidade
                                        }}
                                    )
                                    
                                    localStorage.setItem('clientData',JSON.stringify(arrList));
                                
                                    localStorage.getItem('clientData') ? 
                                    setClients(JSON.parse(localStorage.getItem('clientData'))) :
                                    setClients([]);

                                    setNome('');
                                    setEmail('');
                                    setContato('');
                                    setCep('');
                                    setEstado('');
                                    setEndereco('');
                                    setNumero('');
                                    setComplemento('');
                                    setBairro('');
                                    setCidade('');
                                    setDisplay('none');
                            }else{                                
                                setDisplay('block');
                            }
                        }}>

                    <h2 className="subtitle">Dados Pessoais</h2>

                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Nome" 
                                name='inNome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label className="label">E-mail</label>
                            <input className="input" type="email" placeholder="Email" 
                                name='inEmail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                    <label className="label">Contato</label>
                        <div className="field-body">
                            <div className="field is-expanded">
                                <div className="field has-addons">
                                    <p className="control">
                                    <a className="button is-static">
                                        +55
                                    </a>
                                    </p>
                                    <p className="control is-expanded">
                                    <input className="input" type="tel" placeholder="Telefone" 
                                        name='inContato'
                                        value={contato}
                                        onChange={(e) => setContato(e.target.value)}
                                    />
                                    </p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    
                    {/* Endereço */}
                    
                    <h2 className="subtitle mt-6">Endereço</h2>

                    <div className="field">
                        <label className="label">CEP</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="CEP" 
                            name='inCep'
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className="label">Estado</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="UF"
                            name='inEstado'
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Endereço</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Endereço" 
                            name='inEndereco'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Número</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Número" 
                            name='inNumero'
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Complemento</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Complemento" 
                            name='inComplemento'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className="label">Bairro</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Bairro" 
                            name='inBairro'
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Cidade</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Cidade" 
                            name='inCidade'
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="field is-grouped is-grouped-right mt-5">
                        <p className="control">
                            <button type="submit" className="button is-link">
                            Cadastrar
                            </button>
                        </p>                        
                    </div>

                </form>

            </div>

            <ListClients storage={clients}/>

        </React.Fragment>
    );
}
export default FormPeople;