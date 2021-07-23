import React from 'react';

function Footer(){
    return(
        <React.Fragment>
        <footer className="footer has-background-white">
            <div className="content has-text-centered has-text-grey">
                
                <div className="columns">                    
                    <div className="column is-two-fifths">
                        <div class="card">
                            
                            <div class="card-content">
                                <div class="media">
                                <div class="media-left">
                                    <figure class="image is-60x60">
                                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFkxDBXRtJ4tw/profile-displayphoto-shrink_100_100/0/1516502733618?e=1632355200&v=beta&t=yfi11xN7dMpYUrcvCPUv03LvbgUV4vB9vJ6Tk32feMY" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content has-text-left">
                                    <p class="title is-4">Cláudio Filho</p>
                                    <p class="subtitle is-6">@claudiofilho10</p>
                                </div>
                                </div>

                                <div class="content has-text-left">
                                Profissional de TI a mais de 10 anos, apaixonado por tecnologia, programador em evolução
                                e amante do futebol.                            
                                <br /><br />
                                <a>#react</a> <a>#Javascript</a> <a>#css</a> <a>#GamaAcademy</a> <a>#VTEX</a> <a>#LifelongLearnig</a>
                                
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="column">
                    
                        <div className="box">
                            <h1 className="title is-5">Hiring Coders #2 | VTEX</h1>
                            <p className="has-text-left">
                            É um treinamento completo desenvolvido em parceria com a
                            Gama Academy para pessoas que desejam trabalhar nas principais empresas de tecnologia 
                            do ecossistema VTEX.
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        </footer>

        <div className="has-background-grey has-text-white bottom">
            <div className="container is-fluid">
                <div className="columns">
                    <div className="column">
                        <p>Created by Cláudio Pereira Filho | 2021</p>
                    </div> 
                    <div class="column has-text-right has-text-white">
                            <a class="has-text-white" href="https://www.linkedin.com/in/claudio-pereira-filho/" target="_blank">LinkedIn</a> | 
                            <a class="has-text-white" href="https://github.com/claudiopereirafilho" target="_blank"> Github</a> 
                    </div>           
                </div>
            </div>
        </div>
                      
        </React.Fragment>
    );
}
export default Footer;
