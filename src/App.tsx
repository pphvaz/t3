import { useState } from 'react';
import BarraNavegacao from './componentes/barraNavegacao';
import ListaCliente from './componentes/listaClientes';
import FormularioCadastroCliente from './componentes/formularioCadastroCliente';
import { Cliente } from './types/cliente';

export default function App() {
  const [tema, setTema] = useState('#ffffff');
  const [view, setView] = useState('Clientes-Listar');
  const [clienteParaEditar, setClienteParaEditar] = useState<Cliente | undefined>(undefined);

  const seletorView = (novaView: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    setView(novaView);
    setClienteParaEditar(undefined);
  };

  const handleEditarCliente = (cliente: Cliente) => {
    setView('Clientes-Cadastrar');
    setClienteParaEditar(cliente);
  };

  const handleClienteSubmit = (cliente: Cliente) => {
    // Aqui você implementará a lógica para salvar o cliente
    console.log('Cliente a ser salvo:', cliente);
    // Por enquanto, apenas voltamos para a lista
    setView('Clientes-Listar');
  };

  return (
    <div>
      <BarraNavegacao tema={tema} seletorView={seletorView} />
      <div className="container mx-auto px-4">
        {view === 'Clientes-Listar' && 
          <ListaCliente 
            tema={tema} 
            onEditarCliente={handleEditarCliente}
          />
        }
        {view === 'Clientes-Cadastrar' && 
          <FormularioCadastroCliente 
            tema={tema}
            cliente={clienteParaEditar}
            onSubmit={handleClienteSubmit}
          />
        }
      </div>
    </div>
  );
} 