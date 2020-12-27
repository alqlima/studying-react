import React, { Component } from 'react';
import Child from './componentes/Child'

class App extends Component {
  state = { nome: 'João' }
  Alterar = (novoNome) => { this.setState({ nome: novoNome }) }
  render() {
    return (
      <div>
        <h3>Parent</h3>
        <p>Nome: {this.state.nome}</p>
        <hr />
        <Child funcaoAlterar={this.Alterar} />
      </div>
    )
  }
}

export default App;
