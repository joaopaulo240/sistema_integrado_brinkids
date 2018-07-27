import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import ConfirmaAdulto from './ConfirmaAdulto.js';
import TypesInput from '../TypesInput.js';

// CSS Layout
import '../../assets/style/bootstrap.min.css';
import '../../assets/style/font-awesome.css';
import './css/CadastroAdulto.css';
import './css/style.css';

import $ from "jquery";



class childSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            childSearch: '',
            errr:'',
        };  

       this.ChangechildSearch = this.ChangechildSearch.bind(this);
       this.Search = this.Search.bind(this)
    }

    //Bloco que muda o status para o atual do formulario.
    ChangechildSearch(event){
        this.setState({childSearch: event.target.value});
    }  

    // Faz a busca das crianças
    Search(event){
        $.ajax({
            url: "http://localhost:3001/child/filter/" + this.state.childSearch,
            dataType:'json',
            type: 'GET',
            error: function(response){
              if( response.length === 0){this.setState({erro: "* Nenhum Criança Encontrada."})}           
            },
            success: function(response){
                console.log(response)
            }
          });
    }

    render() {

         return (
             <div className = "container-fluid" >
                <div className = "sub-heard-part" >
                    <ol className = "breadcrumb m-b-0" >
                        <li > < a href = "/" > Home </a></li >
                        <li > Cadastro </li>
                        <li >Adulto </li>
                    </ol >
                </div>
                <div className = "graph-visual" > 
                   <div className = "graph" >    
                        <h3 className = "inner-tittle" > Buscar Criança</h3>       
                        <div className=" text-center">       
                            <input type = "search" id = "childSearch" name = "childSearch"  className="form-control" value={this.state.childSearch} onChange={this.ChangechildSearch} />  
                            <button type="button" className="btn btn-md botao botaoAvançar" onClick={this.Search}> Pesquisar </button>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default childSearch;
