import React,{useEffect,useState} from 'react';

export default function ListClients(props){

    const[clients, setClients] = useState([]);
    let itensList = [];

    // window.addEventListener('storage',() => {
    //     localStorage.getItem('clientData') ? setClients(JSON.parse(localStorage.getItem('clientData'))) : setClients([]);  
    // })
    
    useEffect(()=>{

        // localStorage.getItem('clientData') ? 
        // setClients(JSON.parse(localStorage.getItem('clientData'))) : setClients([]);

        setClients(props.storage);
    },[props]);

    itensList = clients;

    // if (clients !== ''){
    //     itensList = clients.map((item)=>{
    //         return{
    //             id: item.id,
    //             nome: item.nome,
    //             email: item.email,
    //             contato: item.contato,
    //             cep: item.cep,
    //             estado: item.estado,
    //             endereco:item.endereco,
    //             numero:item.numero,
    //             complemento: item.complemento,
    //             bairro:item.bairro,
    //             cidade:item.cidade
    //         }
    //     });
    // }

    return (
        <React.Fragment>

            <div className="column is-two-fifths">

                <section className="hero is-small has-background-link">
                    <div className="hero-body">
                        <p className="title has-text-white">
                        Lista de Clientes
                        </p>                    
                    </div>
                </section>

                <div className="box mt-5">

                    <div className="table-container">
                        { itensList.length > 0 ? 
                            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mb-5">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Contato</th>                                        
                                        <th>CEP</th>
                                        <th>Estado</th>
                                        <th>Endereço</th>
                                        <th>N°</th>
                                        <th>Complemento</th>
                                        <th>Bairro</th>
                                        <th>Cidade</th>                                                                
                                    </tr>
                                </thead>
                                {
                                    itensList.map((clients) =>{
                                        return(
                                            <tbody key={clients.id}>
                                            <tr>
                                                    <td>{clients.nome}</td>
                                                    <td>{clients.email}</td>
                                                    <td>{clients.contato}</td>
                                                    <td>{clients.cep}</td>
                                                    <td>{clients.estado}</td>
                                                    <td>{clients.endereco}</td>
                                                    <td>{clients.numero}</td>
                                                    <td>{clients.complemento}</td>
                                                    <td>{clients.bairro}</td>
                                                    <td>{clients.cidade}</td>                                                    
                                                    
                                                </tr>                                            
                                            </tbody>
                                        )
                                    })
                                }                                       
                            
                            </table>

                        : <p>Nenhum cliente cadastrado!</p>
                        }
                        </div>
                </div>
            </div>
        </React.Fragment>    
    );
}