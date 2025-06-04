import { Component } from 'react';
import BarraNavegacao from './componentes/barraNavegacao';
import ListaCliente from './componentes/listaClientes';
import FormularioCadastroCliente from './componentes/formularioCadastroCliente';
import { Cliente } from './types/cliente';

type State = {
  tema: string,
  view: string,
  clienteParaEditar?: Cliente
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      tema: '#ffffff',
      view: 'Clientes-Listar'
    }
    this.seletorView = this.seletorView.bind(this)
    this.handleEditarCliente = this.handleEditarCliente.bind(this)
    this.handleClienteSubmit = this.handleClienteSubmit.bind(this)
  }

  seletorView(novaView: string, evento: React.MouseEvent) {
    evento.preventDefault()
    this.setState({
      view: novaView,
      clienteParaEditar: undefined
    })
  }

  handleEditarCliente(cliente: Cliente) {
    this.setState({
      view: 'Clientes-Cadastrar',
      clienteParaEditar: cliente
    })
  }

  handleClienteSubmit(cliente: Cliente) {
    // Aqui você implementará a lógica para salvar o cliente
    console.log('Cliente a ser salvo:', cliente)
    // Por enquanto, apenas voltamos para a lista
    this.setState({
      view: 'Clientes-Listar'
    })
  }

  render() {
    return (
      <div>
        <BarraNavegacao tema={this.state.tema} seletorView={this.seletorView} />
        <div className="container mx-auto px-4">
          {this.state.view === 'Clientes-Listar' && 
            <ListaCliente 
              tema={this.state.tema} 
              onEditarCliente={this.handleEditarCliente}
            />
          }
          {this.state.view === 'Clientes-Cadastrar' && 
            <FormularioCadastroCliente 
              tema={this.state.tema}
              cliente={this.state.clienteParaEditar}
              onSubmit={this.handleClienteSubmit}
            />
          }
        </div>
      </div>
    )
  }
} 