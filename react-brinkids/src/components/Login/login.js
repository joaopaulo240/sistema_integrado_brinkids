import React, { Component } from 'react';
import logo from '../../assets/logo1.png';
import video from './loginvideo.mp4';
import './login.css';
import $ from "jquery";

import Cookies from 'universal-cookie';

import {Route} from 'react-router-dom';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Inicio from '../Dashboard/inicio';

class App extends Component {
constructor () {
    super();
    this.state = {
      user:'',
      password:'',
      erro:'',
      loading: false,
    };

    this.textoUsuario = this.textoUsuario.bind(this)
    this.textoPassword = this.textoPassword.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
  }

  textoUsuario(event){
    this.setState({user: event.target.value})
  }

  textoPassword(event){
    this.setState({password: event.target.value})
  }

  loginSubmit(event){
    if (this.state.user.length > 0 && this.state.password.length > 0){
      $.ajax({
        url: `http://127.0.0.1:3001/authentication?user=${this.state.user}&password=${this.state.password}`,
        type: 'get',
        statusCode: { //A partir do status da resposta, ele executa uma função
          200: function(data) {
            alert(data['token'])
            console.log(data['token'])
            this.setState({ loading: true });
            const cookies = new Cookies();
            cookies.set('tokken', (data['token']), {path:'/'});
            window.location.href = '/inicio';
          }.bind(this),
          401: function()  {
            this.setState({erro: "* Senha incorreta"})
          }.bind(this),
          404: function() {
            this.setState({erro: "* Usuário não existe"})
          }.bind(this),
          500: function() {
            this.setState({erro: "* Erro no Servidor.Tente novamente em alguns minutos."})
          }.bind(this)
        }
      });
    }
    else{
      this.setState({erro: "* Por favor, preencha os campos acima"})
    }
  }


  render() {
    return (
      <div className="vid-container">
         <video id="Video1" className="bgvid back" autoPlay="true" muted="muted" preload="auto" loop>
            <source src={video} type="video/mp4" alt="video" />
        </video>

        <form className="inner-container">
            <div className="box">
              <img className="logo_1" src={logo} alt="logo" />
              <input placeholder="Usuário" autoFocus type="text" value={this.state.user} onChange={this.textoUsuario} />
              <input placeholder="Senha" type="password" value={this.state.password} onChange={this.textoPassword}/>
              <button type="button" onClick={this.loginSubmit} >Login</button>
              {/*<!--p>Recuperar <span>Usuário</span> ou <span>Senha</span></p!-->*/}
              <span id="menErro"> {this.state.erro} </span>
            </div>
        </form>
      </div>
    );
  }
}

export default App;
