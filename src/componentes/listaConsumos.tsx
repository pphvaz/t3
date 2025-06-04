import { Component } from "react";
import { Consumo } from "../types/consumo";

type Props = {
    tema: string;
}

export default class ListaConsumos extends Component<Props> {
    render() {
        // Dados de exemplo - serão substituídos por dados reais posteriormente
        const consumos: Consumo[] = [
            {
                id: 1,
                cliente: { id: 1, nome: "João Silva", cpf: "123.456.789-00", rg: "12.345.678-9", dataCadastro: new Date(), telefone: "(11) 99999-9999" },
                pet: { id: 1, nome: "Rex", tipo: "Cachorro", raca: "Labrador", genero: "Macho", dono: { id: 1, nome: "João Silva", cpf: "123.456.789-00", rg: "12.345.678-9", dataCadastro: new Date(), telefone: "(11) 99999-9999" } },
                tipo: "produto",
                produto: { id: 1, nome: "Ração Premium", preco: 89.90, quantidade: 50 },
                quantidade: 2,
                data: new Date(),
                valor: 179.80
            },
            {
                id: 2,
                cliente: { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", rg: "98.765.432-1", dataCadastro: new Date(), telefone: "(11) 98888-8888" },
                pet: { id: 2, nome: "Luna", tipo: "Gato", raca: "Siamês", genero: "Fêmea", dono: { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", rg: "98.765.432-1", dataCadastro: new Date(), telefone: "(11) 98888-8888" } },
                tipo: "servico",
                servico: { id: 1, nome: "Banho e Tosa", preco: 80.00, tipo: "Higiene" },
                quantidade: 1,
                data: new Date(),
                valor: 80.00
            }
        ];

        return (
            <div className="w-full px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Lista de Consumos</h2>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {consumos.map((consumo) => (
                                <tr key={consumo.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{consumo.cliente.nome}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consumo.pet.nome}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{consumo.tipo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {consumo.tipo === "produto" ? consumo.produto?.nome : consumo.servico?.nome}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consumo.quantidade}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {consumo.data.toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        R$ {consumo.valor.toFixed(2)}
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