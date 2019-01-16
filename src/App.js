import React, { Component } from 'react';
import Header from './Componentes/Header';
import News from './Componentes/News';
import Formulario from './Componentes/Formulario'

class App extends Component {

  state = {
    noticias : []
  }

    componentDidMount() {
      this.consultarNoticias();
    }

    consultarNoticias = (categoria = 'general') => {

      console.log(categoria);
      
    let url= `https://newsapi.org/v2/top-headlines?country=nl&category=${categoria}&apiKey=937c0834d16a435c9c4d4b2de812db4a`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      })
}

  render() {
    return (
      <div className="contenedor-app">
          <Header 
            titulo = 'Portal News' 
          />
          <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
            <News 
              noticias = {this.state.noticias} 
            />
          </div>
      </div>
    );
  }
}

export default App;
