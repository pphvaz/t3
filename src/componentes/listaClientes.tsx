/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Cliente } from "../types/cliente";

type Props = {
    tema: string;
    onEditarCliente: (cliente: Cliente) => void;
}

export default class ListaCliente extends Component<Props>{
    render() {
        // Dados de exemplo - serão substituídos por dados reais posteriormente
        const clientes: Cliente[] = [
            {
                id: 1,
                nome: "João Silva",
                cpf: "123.456.789-00",
                rg: "12.345.678-9",
                dataCadastro: new Date("2024-01-01"),
                telefone: "(11) 99999-9999"
            },
            {
                id: 2,
                nome: "Maria Santos",
                cpf: "987.654.321-00",
                rg: "98.765.432-1",
                dataCadastro: new Date("2024-01-02"),
                telefone: "(11) 98888-8888"
            }
        ];

        return (
            <div className="w-full px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Lista de Clientes</h2>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RG</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Cadastro</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {clientes.map((cliente) => (
                                <tr key={cliente.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cliente.nome}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.cpf}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.rg}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {cliente.dataCadastro.toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.telefone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => this.props.onEditarCliente(cliente)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => {/* Implementar exclusão */}}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}