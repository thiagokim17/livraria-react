import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Michele',
        livro: 'JavaScript',
        preco: '18'
      },
      {
        nome: 'Douglas',
        livro: 'C#',
        preco: '5'
      },
      {
        nome: 'Maria',
        livro: 'HTML5/CSS3',
        preco: '65'
      },
      {
        nome: 'Joana',
        livro: 'PLSQL',
        preco: '75'
      }
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        })
      }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({
      autores: [...this.state.autores, autor]
    });
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
