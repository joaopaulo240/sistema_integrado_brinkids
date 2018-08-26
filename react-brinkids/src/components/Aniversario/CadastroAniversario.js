import React from 'react';
import axios from 'axios';
import TypesInput from '../TypesInput.js';

// CSS Layout
import '../../assets/style/bootstrap.min.css';
import '../../assets/style/font-awesome.css';
import './css/Cadastro_Aniversario.css';
import './css/style.css';


class CadastroAniversario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: "FormularioCad",
            //Dados do Aniversariante
            TituloDoAni:"",
            NomeDoAni:"",
            IdadeDoAni:"",
            DataDoAni:"",
            HoraInicio:"",
            HoraFinal:"",
            QuantCrianca:"",
            QuantAdulto:"",
            DescriçãoDoAni:"",
            ObsDoAni:"",
            ValorPg:"",
            MetodoPg:"",   
        }

        this.ChangeTitulo = this.ChangeTitulo.bind(this);
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeIdade = this.ChangeIdade.bind(this);
        this.ChangeDate = this.ChangeDate.bind(this);
        this.ChangeHInicial = this.ChangeHInicial.bind(this);
        this.ChangeHFinal = this.ChangeHFinal.bind(this);
        this.ChangeQCria = this.ChangeQCria.bind(this);
        this.ChangeQAdul = this.ChangeQAdul.bind(this);
        this.ChangeDescricao = this.ChangeDescricao.bind(this);
        this.ChangeObs = this.ChangeObs.bind(this);
        this.ChangeValorPg = this.ChangeValorPg.bind(this);
        this.ChangeMetodoPg = this.ChangeMetodoPg.bind(this);
        
    }

    //Bloco que muda o status para o atual do formulario.
    ChangeTitulo(event){this.setState({TituloDoAni: event.target.value});}

    ChangeName(event){this.setState({NomeDoAni: event.target.value});}

    ChangeIdade(event){this.setState({IdadeDoAni: event.target.value});}

    ChangeDate(event){this.setState({DataDoAni: event.target.value});}

    ChangeHInicial(event){this.setState({HoraInicio: event.target.value});}

    ChangeHFinal(event){this.setState({HoraFinal: event.target.value});}

    ChangeQCria(event){this.setState({QuantCrianca: event.target.value});}

    ChangeQAdul(event){this.setState({QuantAdulto: event.target.value});}

    ChangeDescricao(event){this.setState({DescriçãoDoAni: event.target.value});}

    ChangeObs(event){this.setState({ObsDoAni: event.target.value});}

    ChangeValorPg(event){this.setState({ValorPg: event.target.value});}

    ChangeMetodoPg(event){this.setState({MetodoPg: event.target.value});}
    

    //Função que Valida o Aniversario
    ValidaAniversaio = (event) => {
        event.preventDefault();
        var erros = ValidaErros(this.state);
        if(erros.length > 0){
            alert("Houve erro(s) no preechimento do formulário");
            exibeMensagensDeErro(erros);
            return;
        }
        else {
            exibeMensagensDeErro(erros);
            console.log("deu tudo certo")
            // this.setState({
            //     page: "ConfirmaCad"
            // })
        }
        function ValidaErros (ani){

            var erros = [];

            if (ani.TituloDoAni.length === 0) {
                erros.push("O Titulo não pode ser em branco");
            }
            if (ani.NomeDoAni.length === 0) {
                erros.push("O Nome do Aniversariante não pode ser em branco");
            }
            if (ani.IdadeDoAni.length === 0) {
                erros.push("A Idade do Aniversariante não pode ser em branco");
            }
            if (ani.DataDoAni.length === 0) {
                erros.push("A Data não pode ser em branco");
            }
            if (ani.HoraInicio.length === 0) {
                erros.push("A Hora Inicial não pode ser em branco");
            }
            if (ani.HoraFinal.length === 0) {
                erros.push("A Hora Final não pode ser em branco");
            }
            if (ani.QuantCrianca.length === 0) {
                erros.push("A Quantiade de Convidados Crianças não pode ser em branco");
            }
            if (ani.QuantAdulto.length === 0) {
                erros.push("A Quantiade de Convidados Adultos não pode ser em branco");
            }
            if (ani.ValorPg.length === 0) {
                erros.push("O Valor Pago pelo Aniversario não pode ser em branco");
            }
            if (ani.MetodoPg.length === 0) {
                erros.push("O Metodo de Pagamento do Aniversario não pode ser em branco");
            }
            if (ani.DescriçãoDoAni.length === 0) {
                erros.push("A Descrição do Aniversario não pode ser em branco");
            }
            return erros;
        }

        function exibeMensagensDeErro(erros){
            var ul = document.querySelector("#mensagens-erro");
            ul.innerHTML = "";

            erros.forEach(function(erro){
                var li = document.createElement("li");
                li.textContent = erro;
                ul.appendChild(li);
            });
        }
    }

    render() {
        if(this.state.page === "FormularioCad") {
            return (
                <div className = "container-fluid" >
                    <div className = "sub-heard-part" >
                        <ol className = "breadcrumb m-b-0" >
                            <li > < a href = "/" > Home </a></li >
                            <li > Aniversario </li>
                        </ol >
                    </div>
                    <div className = "graph-visual" >
                        <h3 className = "inner-tittle" > Dados do Aniversariante </h3>
                        <form id="form-criança">
                            <div className = "graph" >
                                <div className = "form-group" >
                                    <div className ="row">
                                        <TypesInput cod = {1} ClassDiv = {"col-md-12 col-sm-12 col-xs-12"} ClassLabel = {"LetraFormulario"} NameLabel = {"Título do Aniversário: "} type = {"text"} id = {"titulo"} name= {"titulo"} Class = {"form-control"} value={this.state.TituloDoAni} onChange={this.ChangeTitulo} />
                                    </div>
                                </div>
                                <div className = "form-group" >
                                    <div className = "row" >
                                        <TypesInput cod = {1} ClassDiv = {"col-md-10 col-sm-10 col-xs-12"} ClassLabel = {"LetraFormulario"} NameLabel = {"Nome do Aniversáriante: "} type = {"text"} id = {"nome"} name= {"nome"} Class = {"form-control"} value = {this.state.NomeDoAni} onChange={this.ChangeName}/>
                                        <TypesInput cod = {1} ClassDiv = {"col-md-2 col-sm-2 col-xs-12"} ClassLabel = {"LetraFormulario brlabel"} NameLabel = {"Idade: "} type = {"number"} id = {"idade"} name= {"idade"} Class = {"form-control"} value = {this.state.IdadeDoAni} onChange={this.ChangeIdade}/>
                                    </div>
                                </div>
                                <div className = "form-group" >
                                    <div className = "row" >
                                        <TypesInput cod = {1} ClassDiv = {"col-md-4 col-sm-4 col-xs-12"} ClassLabel = {"LetraFormulario"} NameLabel = {"Data do Aniversario: "} type = {"date"} id = {"Data"} name= {"Data"} Class = {"form-control"} value = {this.state.DataDoAni} onChange={this.ChangeDate}/>
                                        <TypesInput cod = {1} ClassDiv = {"col-md-4 col-sm-4 col-xs-12"} ClassLabel = {"LetraFormulario brlabel"} NameLabel = {"Hora incial: "} type = {"time"} id = {"HI"} name= {"HI"} Class = {"form-control"} value = {this.state.HoraInicio} onChange={this.ChangeHInicial}/>
                                        <TypesInput cod = {1} ClassDiv = {"col-md-4 col-sm-4 col-xs-12"} ClassLabel = {"LetraFormulario brlabel"} NameLabel = {"Hora Final: "} type = {"time"} id = {"HF"} name= {"HF"} Class = {"form-control"} value = {this.state.HoraFinal} onChange={this.ChangeHFinal}/>
                                    </div>
                                </div>
                                <div className = "form-group" >
                                    <div className = "row" >
                                        <TypesInput cod = {1} ClassDiv = {"col-md-6 col-sm-6 col-xs-12"} ClassLabel = {"LetraFormulario"} NameLabel = {"Quantidade de Convidados Crianças: "} type = {"number"} id = {"QCC"} name= {"QCC"} Class = {"form-control"} value = {this.state.QuantCrianca} onChange={this.ChangeQCria}/>
                                        <TypesInput cod = {1} ClassDiv = {"col-md-6 col-sm-6 col-xs-12"} ClassLabel = {"LetraFormulario brlabel"} NameLabel = {"Quantidade de Convidados Adultos: "} type = {"number"} id = {"QCA"} name= {"QCA"} Class = {"form-control"} value = {this.state.QuantAdulto} onChange={this.ChangeQAdul}/>
                                    </div>
                                </div>
                                <div className = "form-group" >
                                    <div className = "row" >
                                        <TypesInput cod = {1} ClassDiv = {"col-md-6 col-sm-6 col-xs-12"} ClassLabel = {"LetraFormulario"} NameLabel = {"Valor Pago: "} type = {"number"} id = {"QCC"} name= {"QCC"} Class = {"form-control"} placeholder = {"R$"} value = {this.state.ValorPg} onChange={this.ChangeValorPg}/>
                                        <TypesInput cod = {1} ClassDiv = {"col-md-6 col-sm-6 col-xs-12"} ClassLabel = {"LetraFormulario brlabel"} NameLabel = {"Metodo de Pagamento: "} type = {"text"} id = {"QCA"} name= {"QCA"} Class = {"form-control"} value = {this.state.MetodoPg} onChange={this.ChangeMetodoPg}/>
                                    </div>
                                </div>
                                <div className = "form-group" >
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <h3 className = "inner-tittle" > Descrição do Aniversario </h3>
                                            <br></br>
                                            <TypesInput cod = {2} Label = {0} cols = {"50"} rows = {"4"} id = {"Descricao"} name= {"Descricao"} Class = {"form-control"} value={this.state.DescriçãoDoAni} onChange={this.ChangeDescricao} />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <h3 className = "inner-tittle" > Observações </h3>
                                            <br></br>
                                            <TypesInput cod = {2} Label = {0} cols = {"50"} rows = {"4"} id = {"Observacoes"} name= {"Observacoes"} Class = {"form-control"} value={this.state.ObsDoAni} onChange={this.ChangeObs}/>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <br></br>
                            <div className="text-center">
                                <a className="btn btn-md botao" href="/">Cencelar</a>
                                <button className="btn btn-md botao botaoAvançar" onClick={this.ValidaAniversaio}>Avançar</button>
                            </div>                      
                        </form >
                            <div>
                               <ul id="mensagens-erro" style={{color: "red"}}></ul>
                            </div>  
                    </div>
                </div>
            )
        }
    }

}

export default CadastroAniversario;